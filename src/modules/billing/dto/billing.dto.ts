// src/modules/billing/dto/billing.dto.ts
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsArray, IsUUID, ValidateNested, IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { InvoiceType, PaymentMethod } from '@prisma/client';

export class InvoiceItemDto {
    @ApiProperty({ example: 'Monthly Membership - June 2026' })
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty({ example: 5000.00 })
    @IsNumber()
    @Min(0)
    amount: number;
}

export class CreateInvoiceDto {
    @ApiProperty()
    @IsUUID()
    @IsNotEmpty()
    membershipId: string;

    @ApiProperty({ enum: InvoiceType })
    @IsEnum(InvoiceType)
    type: InvoiceType;

    @ApiProperty({ type: [InvoiceItemDto] })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => InvoiceItemDto)
    lineItems: InvoiceItemDto[];
}

export class ManualPaymentDto {
    @ApiProperty()
    @IsUUID()
    @IsNotEmpty()
    invoiceId: string;

    @ApiProperty({ enum: ['CASH', 'BANK_TRANSFER'] })
    @IsEnum(PaymentMethod)
    method: PaymentMethod;

    @ApiProperty({ example: 5000.00 })
    @IsNumber()
    @Min(1)
    amount: number;
}