import { Injectable } from '@nestjs/common';
import { ActivityRepository } from '../repositories/activityRepository';
import { ActivityNotFoundException } from '../exceptions/activityNotFound';

interface FindActivityByIdRequest {
  activity_id: string;
}

@Injectable()
export class FindActivityByIdUseCase {
  constructor(private activityRepository: ActivityRepository) {}

  async execute({ activity_id }: FindActivityByIdRequest) {
    const activity = await this.activityRepository.findById(activity_id);

    if (!activity) {
      throw new ActivityNotFoundException();
    }

    return activity;
  }
}
