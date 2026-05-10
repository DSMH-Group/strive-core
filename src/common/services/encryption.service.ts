// src/common/services/encryption.service.ts
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as crypto from 'crypto';

@Injectable()
export class EncryptionService {
    private readonly algorithm = 'aes-256-gcm';
    private readonly key: Buffer;

    constructor(private configService: ConfigService) {
        const secret = this.configService.get<string>('ENCRYPTION_KEY');
        if (!secret || secret.length !== 64) {
            throw new InternalServerErrorException('System misconfiguration: Invalid ENCRYPTION_KEY.');
        }
        // Convert the hex string back to a 32-byte buffer
        this.key = Buffer.from(secret, 'hex');
    }

    /**
     * Encrypts a plaintext string and returns a composite payload.
     * Format: iv:authTag:encryptedData
     */
    encrypt(text: string): string {
        const iv = crypto.randomBytes(16); // 16 bytes is standard for GCM
        const cipher = crypto.createCipheriv(this.algorithm, this.key, iv);

        let encrypted = cipher.update(text, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        const authTag = cipher.getAuthTag().toString('hex');

        return `${iv.toString('hex')}:${authTag}:${encrypted}`;
    }

    /**
     * Decrypts the composite payload back to plaintext.
     */
    decrypt(cipherText: string): string {
        try {
            const parts = cipherText.split(':');
            if (parts.length !== 3) throw new Error('Invalid ciphertext format');

            const iv = Buffer.from(parts[0], 'hex');
            const authTag = Buffer.from(parts[1], 'hex');
            const encryptedText = parts[2];

            const decipher = crypto.createDecipheriv(this.algorithm, this.key, iv);
            decipher.setAuthTag(authTag); // Required for GCM to verify integrity

            let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
            decrypted += decipher.final('utf8');

            return decrypted;
        } catch (error) {
            throw new InternalServerErrorException('Failed to decrypt secure data.');
        }
    }
}