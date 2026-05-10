// src/modules/comms-audit/dto/broadcast.dto.ts
import { IsEnum, IsJSON, IsNotEmpty, IsObject, IsString } from 'class-validator';

export enum CommunicationChannel {
    SMS = 'SMS',
    EMAIL = 'EMAIL',
}

export class BroadcastDto {
    @IsObject()
    @IsNotEmpty()
    audienceFilter: Record<string, any>;

    @IsEnum(CommunicationChannel)
    @IsNotEmpty()
    channel: CommunicationChannel;

    @IsString()
    @IsNotEmpty()
    templateId: string;
}