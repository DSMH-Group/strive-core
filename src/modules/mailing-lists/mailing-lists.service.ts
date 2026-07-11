import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateMailingListDto, UpdateMailingListDto } from './dto/mailing-lists.dto';

@Injectable()
export class MailingListsService {
    constructor(private readonly prisma: PrismaService) {}

    async create(tenantId: string, dto: CreateMailingListDto) {
        return this.prisma.$transaction(async (tx) => {
            const list = await tx.mailingList.create({
                data: {
                    tenantId,
                    name: dto.name,
                    description: dto.description
                }
            });

            if (dto.memberIds && dto.memberIds.length > 0) {
                const memberData = dto.memberIds.map(mId => ({
                    mailingListId: list.id,
                    membershipId: mId
                }));
                await tx.mailingListMember.createMany({
                    data: memberData
                });
            }

            return tx.mailingList.findUnique({
                where: { id: list.id },
                include: { members: { include: { membership: { include: { user: true } } } } }
            });
        });
    }

    async findAll(tenantId: string) {
        return this.prisma.mailingList.findMany({
            where: { tenantId },
            include: {
                members: {
                    include: {
                        membership: {
                            include: {
                                user: {
                                    select: {
                                        firstName: true,
                                        lastName: true,
                                        email: true,
                                        phone: true
                                    }
                                }
                            }
                        }
                    }
                }
            },
            orderBy: { name: 'asc' }
        });
    }

    async findOne(tenantId: string, id: string) {
        const list = await this.prisma.mailingList.findFirst({
            where: { id, tenantId },
            include: {
                members: {
                    include: {
                        membership: {
                            include: {
                                user: true
                            }
                        }
                    }
                }
            }
        });
        if (!list) throw new NotFoundException('Mailing list not found');
        return list;
    }

    async update(tenantId: string, id: string, dto: UpdateMailingListDto) {
        const list = await this.prisma.mailingList.findFirst({ where: { id, tenantId } });
        if (!list) throw new NotFoundException('Mailing list not found');

        return this.prisma.$transaction(async (tx) => {
            await tx.mailingList.update({
                where: { id },
                data: {
                    ...(dto.name !== undefined && { name: dto.name }),
                    ...(dto.description !== undefined && { description: dto.description })
                }
            });

            if (dto.memberIds !== undefined) {
                // Delete existing members
                await tx.mailingListMember.deleteMany({
                    where: { mailingListId: id }
                });

                // Add new members
                if (dto.memberIds.length > 0) {
                    const memberData = dto.memberIds.map(mId => ({
                        mailingListId: id,
                        membershipId: mId
                    }));
                    await tx.mailingListMember.createMany({
                        data: memberData
                    });
                }
            }

            return tx.mailingList.findUnique({
                where: { id },
                include: { members: { include: { membership: { include: { user: true } } } } }
            });
        });
    }

    async remove(tenantId: string, id: string) {
        const list = await this.prisma.mailingList.findFirst({ where: { id, tenantId } });
        if (!list) throw new NotFoundException('Mailing list not found');

        await this.prisma.mailingList.delete({ where: { id } });
        return { success: true };
    }
}
