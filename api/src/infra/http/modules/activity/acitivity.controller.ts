import { Controller, Post, Body } from '@nestjs/common';
import { CreateActivityUseCase } from 'src/modules/activity/useCases/createActivityUseCase';
import { CreateActivityBody } from './dto/activityBody';

@Controller('activity')
export class ActivityController {
  constructor(private createActivityUseCase: CreateActivityUseCase) {}

  @Post()
  async createActivity(@Body() body: CreateActivityBody) {
    const { name, description } = body;

    await this.createActivityUseCase.execute({
      name,
      description,
    });
  }
}
