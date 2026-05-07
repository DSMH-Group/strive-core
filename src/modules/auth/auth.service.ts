import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { RegisterDto } from './dto/register.dto';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService,
    ) {}

    async register(dto: RegisterDto) {
        // 1. Check for existing global identity
        const existingUser = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });

        if (existingUser) {
            throw new ConflictException('This email is already registered with Strive');
        }

        // 2. Hash password with Argon2id
        const passwordHash = await argon2.hash(dto.password);

        // 3. Create Global User
        return this.prisma.user.create({
            data: {
                email: dto.email,
                passwordHash,
                firstName: dto.firstName,
                lastName: dto.lastName,
                phone: dto.phone,
            },
            select: { id: true, email: true, firstName: true },
        });
    }

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.prisma.user.findUnique({ where: { email } });
        if (user && (await argon2.verify(user.passwordHash, pass))) {
            const { passwordHash, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { sub: user.id, email: user.email };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}