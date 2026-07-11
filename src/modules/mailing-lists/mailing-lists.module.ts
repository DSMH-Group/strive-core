import { Module } from '@nestjs/common';
import { MailingListsService } from './mailing-lists.service';
import { MailingListsController } from './mailing-lists.controller';
import { PrismaModule } from '../../database/prisma.module';

@Module({
    imports: [PrismaModule],
    controllers: [MailingListsController],
    providers: [MailingListsService],
    exports: [MailingListsService]
})
export class MailingListsModule {}
