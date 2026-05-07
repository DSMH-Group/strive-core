import { IsEmail, IsNotEmpty, IsString, MinLength, IsOptional } from 'class-validator';

export class RegisterDto {
    @IsEmail({}, { message: 'A valid Sri Lankan or global email is required' })
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8, { message: 'Password must be at least 8 characters' })
    password: string;

    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsOptional()
    @IsString()
    phone?: string; // Optional initially, but vital for future Text.lk integration
}