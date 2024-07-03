import {
  Controller,
  Post,
  Body,
  Delete,
  Param,
  Get,
  Put,
} from '@nestjs/common';
import { CreateActivityUseCase } from '../../../../modules/activity/useCases/createActivityUseCase';
import { CreateOrEditActivityBody } from './dto/activityBody';
import { DeleteActivityUseCase } from './../../../../modules/activity/useCases/deleteActivityUseCase';
import { FindActivityByIdUseCase } from './../../../../modules/activity/useCases/findActivityById';
import { FindAllActivitiesUseCase } from './../../../../modules/activity/useCases/findAllActivities';
import { EditActivityUseCase } from './../../../../modules/activity/useCases/editActivityUseCase';

@Controller('activity')
export class ActivityController {
  constructor(
    private createActivityUseCase: CreateActivityUseCase,
    private deleteActivityUseCase: DeleteActivityUseCase,
    private findActivityByIdUseCase: FindActivityByIdUseCase,
    private findAllActivitiesUseCase: FindAllActivitiesUseCase,
    private editActivityUseCase: EditActivityUseCase,
  ) {}

  @Post()
  async createActivity(@Body() body: CreateOrEditActivityBody) {
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

  @Put(':id')
  async editActivity(
    @Param('id') activity_id: string,
    @Body() body: CreateOrEditActivityBody,
  ) {
    const { description, name } = body;
    const activity = await this.editActivityUseCase.execute({
      activity_id,
      description,
      name,
    });

    return activity;
  }

  @Delete(':id')
  async deleteLove(@Param('id') activity_id: string) {
    await this.deleteActivityUseCase.execute({
      activity_id,
    });
  }
}
