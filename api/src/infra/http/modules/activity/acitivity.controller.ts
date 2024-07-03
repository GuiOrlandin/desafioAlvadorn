import { Controller, Post, Body, Delete, Param } from '@nestjs/common';
import { CreateActivityUseCase } from 'src/modules/activity/useCases/createActivityUseCase';
import { CreateActivityBody } from './dto/activityBody';
import { DeleteActivityUseCase } from 'src/modules/activity/useCases/deleteActivityUseCase';

@Controller('activity')
export class ActivityController {
  constructor(
    private createActivityUseCase: CreateActivityUseCase,
    private deleteActivityUseCase: DeleteActivityUseCase,
  ) {}

  @Post()
  async createActivity(@Body() body: CreateActivityBody) {
    const { name, description } = body;

    await this.createActivityUseCase.execute({
      name,
      description,
    });
  }

  @Delete(':id')
  async deleteLove(@Param('id') activity_id: string) {
    await this.deleteActivityUseCase.execute({
      activity_id,
    });
  }
}
