// src/modules/plans/plans.module.ts
import {Module} from '@nestjs/common';
import {PlansService} from './plans.service';
import {PlansController} from './plans.controller';
import {PrismaModule} from '../../database/prisma.module'; // Adjust based on your folder structure

@Module({
    imports: [PrismaModule],
    controllers: [PlansController],
    providers: [PlansService],
    exports: [PlansService],
})
export class PlansModule {
}