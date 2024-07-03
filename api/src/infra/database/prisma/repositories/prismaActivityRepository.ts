import { Injectable } from '@nestjs/common';
import { Activity } from 'src/modules/activity/entities/activity';
import { ActivityRepository } from 'src/modules/activity/repositories/activityRepository';
import { PrismaService } from '../prisma.service';
import { ActivityAlreadyCreatedException } from 'src/modules/activity/exceptions/activityAlreadyCreated';
import { PrismaActivityMapper } from '../mappers/prismaActivityMapper';
import { ActivityNotFoundException } from 'src/modules/activity/exceptions/activityNotFound';

@Injectable()
export class PrismaActivityRepository implements ActivityRepository {
  constructor(private prisma: PrismaService) {}

  async create(activity: Activity): Promise<void> {
    const existingActivity = await this.prisma.activity.findFirst({
      where: {
        name: activity.name,
      },
    });

    if (existingActivity) {
      throw new ActivityAlreadyCreatedException();
    }

    const ActivityRaw = PrismaActivityMapper.toPrismaActivity(activity);

    await this.prisma.activity.create({
      data: ActivityRaw,
    });
  }

  async findById(id: string): Promise<Activity> {
    const activity = await this.prisma.activity.findFirst({
      where: {
        id,
      },
    });

    if (!activity) {
      throw new ActivityNotFoundException();
    }

    return PrismaActivityMapper.toDomainActivity(activity);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.activity.delete({
      where: {
        id: id,
      },
    });
  }

  findAllActivity(): Promise<Activity[]> {
    throw new Error('Method not implemented.');
  }
  save(activity: Activity): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
