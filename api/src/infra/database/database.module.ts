import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { ActivityRepository } from 'src/modules/activity/repositories/activityRepository';
import { PrismaActivityRepository } from './prisma/repositories/prismaActivityRepository';

@Module({
  providers: [
    PrismaService,
    {
      provide: ActivityRepository,
      useClass: PrismaActivityRepository,
    },
  ],
  exports: [ActivityRepository],
})
export class DatabaseModule {}
