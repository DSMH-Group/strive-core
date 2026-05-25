// src/modules/billing/dto/billing.dto.ts
import {ApiProperty} from '@nestjs/swagger';
import {IsArray, IsEnum, IsInt, IsNotEmpty, IsNumber, IsString, IsUUID, Min, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';
import {InvoiceType, PaymentMethod} from '@prisma/client';

export class InvoiceItemDto {
    @ApiProperty({description: 'Line item description'})
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty({example: 5000.00, description: 'Line item amount'})
    @IsNumber()
    @Min(0)
    amount: number;
}

export class CreateInvoiceDto {
    @ApiProperty()
    @IsUUID()
    @IsNotEmpty()
    membershipId: string;

    @ApiProperty({enum: InvoiceType})
    @IsEnum(InvoiceType)
    type: InvoiceType;

    @ApiProperty({type: [InvoiceItemDto]})
    @IsArray()
    @ValidateNested({each: true})
    @Type(() => InvoiceItemDto)
    lineItems: InvoiceItemDto[];
}

export class ManualPaymentDto {
    @ApiProperty()
    @IsUUID()
    @IsNotEmpty()
    invoiceId: string;

    @ApiProperty({enum: PaymentMethod})
    @IsEnum(PaymentMethod)
    method: PaymentMethod;

    @ApiProperty({example: 5000.00})
    @IsNumber()
    @Min(1)
    amount: number;
}

export class SubscribeDto {
    @ApiProperty({description: 'The UUID of the Plan/Tier to purchase'})
    @IsUUID()
    @IsNotEmpty()
    planId: string;
}

export class TopUpDto {
    @ApiProperty({description: 'Amount of tokens to purchase', example: 10})
    @IsInt()
    @Min(1)
    tokenAmount: number;
}