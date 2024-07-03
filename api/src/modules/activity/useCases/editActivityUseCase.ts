import { Injectable } from '@nestjs/common';

import { ActivityNotFoundException } from '../exceptions/activityNotFound';
import { ActivityRepository } from '../repositories/activityRepository';

interface EditActivityRequest {
  description?: string;
  name: string;
  activity_id: string;
}

@Injectable()
export class EditActivityUseCase {
  constructor(private activityRepository: ActivityRepository) {}

  async execute({ name, description, activity_id }: EditActivityRequest) {
    const activity = await this.activityRepository.findById(activity_id);

    if (!activity) {
      throw new ActivityNotFoundException();
    }

    activity.description = description;
    activity.name = name;

    await this.activityRepository.save(activity);

    return activity;
  }
}
