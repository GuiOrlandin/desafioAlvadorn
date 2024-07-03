import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { ActivityController } from './acitivity.controller';
import { CreateActivityUseCase } from 'src/modules/activity/useCases/createActivityUseCase';
import { DeleteActivityUseCase } from 'src/modules/activity/useCases/deleteActivityUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [ActivityController],
  providers: [CreateActivityUseCase, DeleteActivityUseCase],
})
export class ActivityModule {}
