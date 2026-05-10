// src/modules/documents/documents.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { GetUploadUrlDto } from './dto/upload-request.dto';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DocumentsService {
    private s3Client: S3Client;
    private bucketName: string;

    constructor(
        private readonly prisma: PrismaService,
        private readonly configService: ConfigService,
    ) {
        // getOrThrow ensures the app crashes at startup if these are missing,
        // and correctly narrows the type from 'string | undefined' to 'string'.
        const region = this.configService.getOrThrow<string>('AWS_REGION');
        const accessKeyId = this.configService.getOrThrow<string>('AWS_ACCESS_KEY_ID');
        const secretAccessKey = this.configService.getOrThrow<string>('AWS_SECRET_ACCESS_KEY');

        this.s3Client = new S3Client({
            region,
            credentials: {
                accessKeyId,
                secretAccessKey,
            },
        });

        this.bucketName = this.configService.getOrThrow<string>('AWS_S3_BUCKET');
    }

    async generateUploadUrl(tenantId: string, userId: string, dto: GetUploadUrlDto) {
        // 1. Resolve membership for the user in this tenant
        const membership = await this.prisma.membership.findUnique({
            where: { userId_tenantId: { userId, tenantId } },
        });

        if (!membership) throw new NotFoundException('Membership not found for this tenant.');

        // 2. Generate Scoped S3 Key: /{tenant_id}/{context}/{user_id}/{filename}
        const fileKey = `${tenantId}/${dto.context.toLowerCase()}/${userId}/${Date.now()}-${dto.fileName}`;

        // 3. Create Pre-signed URL
        const command = new PutObjectCommand({
            Bucket: this.bucketName,
            Key: fileKey,
            ContentType: dto.fileType,
        });

        const uploadUrl = await getSignedUrl(this.s3Client, command, { expiresIn: 3600 });

        // 4. Register document in DB (Status: PENDING/Uploaded depends on frontend confirmation)
        const document = await this.prisma.document.create({
            data: {
                membershipId: membership.id,
                fileName: dto.fileName,
                fileUrl: fileKey, // Store the key/path
                context: dto.context,
            },
        });

        return {
            uploadUrl,
            fileKey,
            documentId: document.id,
        };
    }

    async listMemberDocuments(tenantId: string, membershipId: string) {
        return this.prisma.document.findMany({
            where: {
                membershipId,
                membership: { tenantId }, // Ensure tenant isolation
            },
            orderBy: { uploadedAt: 'desc' },
        });
    }
}