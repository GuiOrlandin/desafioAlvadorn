import { Activity } from '../entities/activity';

export abstract class ActivityRepository {
  abstract create(activity: Activity): Promise<void>;
  abstract findById(id: string): Promise<Activity | null>;
  abstract delete(id: string): Promise<void>;
  abstract findAllActivity(): Promise<Activity[]>;
  abstract save(activity: Activity): Promise<void>;
}
