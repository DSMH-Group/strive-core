import { IsEnum, IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator';

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

    @IsString()
    @IsOptional()
    customText?: string;
}