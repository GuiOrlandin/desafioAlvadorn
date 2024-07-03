import { Injectable } from '@nestjs/common';
import { Activity } from '../entities/activity';
import { ActivityRepository } from '../repositories/activityRepository';

interface CreatedActivityRequest {
  description: string;
  name: string;
}

@Injectable()
export class CreateActivityUseCase {
  constructor(private activityRepository: ActivityRepository) {}

  async execute({ description, name }: CreatedActivityRequest) {
    const activity = new Activity({ description, name });

    await this.activityRepository.create(activity);
    return activity;
  }
}
