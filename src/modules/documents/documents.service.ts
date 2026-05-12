// src/modules/documents/documents.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { GetUploadUrlDto } from './dto/upload-request.dto';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { ConfigService } from '@nestjs/config';
import { TenantPrismaService } from '../../database/tenant-prisma.service';

@Injectable()
export class DocumentsService {
    private s3Client: S3Client;
    private bucketName: string;

    constructor(
        private readonly tenantPrisma: TenantPrismaService, // Renamed for consistency
        private readonly configService: ConfigService,
    ) {
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

    // Removed tenantId from the signature
    async generateUploadUrl(userId: string, dto: GetUploadUrlDto) {
        // 1. Resolve membership for the user in this tenant
        // Swapped to findFirst. The proxy invisibly appends `tenantId` to the where clause!
        const membership = await this.tenantPrisma.client.membership.findFirst({
            where: { userId },
        });

        if (!membership) throw new NotFoundException('Membership not found for this tenant.');

        // Extract the raw tenant ID from our request-scoped service for AWS
        const currentTenantId = this.tenantPrisma.activeTenantId;

        // 2. Generate Scoped S3 Key: /{tenant_id}/{context}/{user_id}/{filename}
        const fileKey = `${currentTenantId}/${dto.context.toLowerCase()}/${userId}/${Date.now()}-${dto.fileName}`;

        // 3. Create Pre-signed URL
        const command = new PutObjectCommand({
            Bucket: this.bucketName,
            Key: fileKey,
            ContentType: dto.fileType,
        });

        const uploadUrl = await getSignedUrl(this.s3Client, command, { expiresIn: 3600 });

        // 4. Register document in DB
        // tenantId is invisibly injected into the data payload by the proxy
        const document = await this.tenantPrisma.client.document.create({
            data: {
                membershipId: membership.id,
                fileName: dto.fileName,
                fileUrl: fileKey,
                context: dto.context,
            },
        });

        return {
            uploadUrl,
            fileKey,
            documentId: document.id,
        };
    }

    // Removed tenantId from the signature
    async listMemberDocuments(membershipId: string) {
        return this.tenantPrisma.client.document.findMany({
            where: {
                membershipId,
                // The manual `membership: { tenantId }` relation check is gone.
                // The proxy automatically scopes the Document table itself!
            },
            orderBy: { uploadedAt: 'desc' },
        });
    }
}