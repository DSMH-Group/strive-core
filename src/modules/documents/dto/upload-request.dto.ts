// src/modules/documents/dto/upload-request.dto.ts
import { IsEnum, IsNotEmpty, IsString, Matches } from 'class-validator';

export enum DocumentContext {
    WAIVER = 'WAIVER',
    AVATAR = 'AVATAR',
    MEDICAL = 'MEDICAL',
}

export class GetUploadUrlDto {
    @IsString()
    @IsNotEmpty()
    @Matches(/^.*\.(jpg|jpeg|png|pdf)$/i, {
        message: 'Only images (jpg, png) and PDFs are allowed',
    })
    fileName: string;

    @IsString()
    @IsNotEmpty()
    fileType: string; // e.g., 'application/pdf' or 'image/jpeg'

    @IsEnum(DocumentContext)
    @IsNotEmpty()
    context: DocumentContext;
}