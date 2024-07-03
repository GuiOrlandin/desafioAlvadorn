import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { ActivityController } from './acitivity.controller';
import { CreateActivityUseCase } from 'src/modules/activity/useCases/createActivityUseCase';
import { DeleteActivityUseCase } from 'src/modules/activity/useCases/deleteActivityUseCase';
import { FindActivityByIdUseCase } from 'src/modules/activity/useCases/findActivityById';
import { FindAllActivitiesUseCase } from 'src/modules/activity/useCases/findAllActivities';

@Module({
  imports: [DatabaseModule],
  controllers: [ActivityController],
  providers: [
    CreateActivityUseCase,
    DeleteActivityUseCase,
    FindActivityByIdUseCase,
    FindAllActivitiesUseCase,
  ],
})
export class ActivityModule {}
