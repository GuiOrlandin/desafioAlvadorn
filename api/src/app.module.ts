import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { ActivityModule } from './infra/http/modules/activity/acitivity.module';

@Module({
  imports: [DatabaseModule, ActivityModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
