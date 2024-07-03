import { Activity } from '../entities/activity';
import { ActivityRepository } from './activityRepository';

export class ActivityRepositoryInMemory implements ActivityRepository {
  public activities: Activity[] = [];

  async create(activity: Activity): Promise<void> {
    this.activities.push(activity);
  }

  async findById(id: string): Promise<Activity> {
    const activity = this.activities.find((activity) => activity.id === id);

    if (!activity) {
      return null;
    }

    return activity;
  }

  async delete(id: string): Promise<void> {
    this.activities = this.activities.filter((activity) => activity.id !== id);
  }

  async findAllActivity(): Promise<Activity[]> {
    const allActivities = this.activities;

    return Promise.resolve(allActivities);
  }

  async save(activity: Activity): Promise<void> {
    const activityIndex = this.activities.findIndex(
      (currentActivity) => currentActivity.id === activity.id,
    );

    if (activityIndex >= 0) {
      this.activities[activityIndex] = activity;
    }
  }
}
