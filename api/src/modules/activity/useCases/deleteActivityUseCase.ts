import { Injectable } from '@nestjs/common';
import { ActivityRepository } from '../repositories/activityRepository';
import { ActivityNotFoundException } from '../exceptions/activityNotFound';

interface DeleteActivityRequest {
  activity_id: string;
}

@Injectable()
export class DeleteActivityUseCase {
  constructor(private activityRepository: ActivityRepository) {}

  async execute({ activity_id }: DeleteActivityRequest) {
    const activity = await this.activityRepository.findById(activity_id);

    if (!activity) {
      throw new ActivityNotFoundException();
    }

    await this.activityRepository.delete(activity_id);
  }
}
