import { Injectable } from '@nestjs/common';
import { ActivityRepository } from '../repositories/activityRepository';
import { ActivityNotFoundException } from '../exceptions/activityNotFound';

@Injectable()
export class FindAllActivitiesUseCase {
  constructor(private activityRepository: ActivityRepository) {}

  async execute() {
    const activities = await this.activityRepository.findAllActivity();

    if (activities.length === 0) {
      throw new ActivityNotFoundException();
    }

    return activities;
  }
}
