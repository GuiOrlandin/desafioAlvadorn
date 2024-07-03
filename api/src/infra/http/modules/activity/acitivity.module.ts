import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { ActivityController } from './acitivity.controller';
import { CreateActivityUseCase } from 'src/modules/activity/useCases/createActivityUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [ActivityController],
  providers: [CreateActivityUseCase],
})
export class ActivityModule {}
