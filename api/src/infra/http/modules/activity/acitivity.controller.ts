import { Controller, Post, Body, Delete, Param, Get } from '@nestjs/common';
import { CreateActivityUseCase } from 'src/modules/activity/useCases/createActivityUseCase';
import { CreateActivityBody } from './dto/activityBody';
import { DeleteActivityUseCase } from 'src/modules/activity/useCases/deleteActivityUseCase';
import { FindActivityByIdUseCase } from 'src/modules/activity/useCases/findActivityById';
import { FindAllActivitiesUseCase } from 'src/modules/activity/useCases/findAllActivities';

@Controller('activity')
export class ActivityController {
  constructor(
    private createActivityUseCase: CreateActivityUseCase,
    private deleteActivityUseCase: DeleteActivityUseCase,
    private findActivityByIdUseCase: FindActivityByIdUseCase,
    private findAllActivitiesUseCase: FindAllActivitiesUseCase,
  ) {}

  @Post()
  async createActivity(@Body() body: CreateActivityBody) {
    const { name, description } = body;

    await this.createActivityUseCase.execute({
      name,
      description,
    });
  }

  @Get(':id')
  async findActivityById(@Param('id') activity_id: string) {
    const activity = await this.findActivityByIdUseCase.execute({
      activity_id,
    });

    return activity;
  }

  @Get()
  async findAllActivities() {
    const AllActivities = await this.findAllActivitiesUseCase.execute();

    return AllActivities;
  }

  @Delete(':id')
  async deleteLove(@Param('id') activity_id: string) {
    await this.deleteActivityUseCase.execute({
      activity_id,
    });
  }
}
