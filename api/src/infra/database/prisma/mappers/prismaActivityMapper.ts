import { Activity } from 'src/modules/activity/entities/activity';
import { Activity as ActivityRaw } from '@prisma/client';

export class PrismaActivityMapper {
  static toPrismaActivity({
    name,
    created_at,
    description,
    id,
  }: Activity): ActivityRaw {
    return {
      name,
      created_at,
      description,
      id,
    };
  }

  static toDomainActivity({
    name,
    created_at,
    description,
    id,
  }: ActivityRaw): Activity {
    return new Activity({
      name,
      created_at,
      description,
      id,
    });
  }

  static toDomainActivities(activities: ActivityRaw[]): Activity[] {
    return activities.map(
      (activity) =>
        new Activity({
          name: activity.name,
          created_at: activity.created_at,
          description: activity.description,
          id: activity.id,
        }),
    );
  }
}
