import { Test, TestingModule } from '@nestjs/testing';

import { CreateActivityUseCase } from '../../../../modules/activity/useCases/createActivityUseCase';
import { ActivityController } from './acitivity.controller';
import { DeleteActivityUseCase } from '../../../../modules/activity/useCases/deleteActivityUseCase';
import { FindActivityByIdUseCase } from '../../../../modules/activity/useCases/findActivityById';
import { FindAllActivitiesUseCase } from '../../../../modules/activity/useCases/findAllActivities';
import { EditActivityUseCase } from '../../../../modules/activity/useCases/editActivityUseCase';

describe('ActivityController', () => {
  let controller: ActivityController;
  let createActivityUseCase: CreateActivityUseCase;
  let deleteActivityUseCase: DeleteActivityUseCase;
  let findActivityByIdUseCase: FindActivityByIdUseCase;
  let findAllActivitiesUseCase: FindAllActivitiesUseCase;
  let editActivityUseCase: EditActivityUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActivityController],
      providers: [
        {
          provide: CreateActivityUseCase,
          useValue: { execute: jest.fn() },
        },
        {
          provide: DeleteActivityUseCase,
          useValue: { execute: jest.fn() },
        },
        {
          provide: FindActivityByIdUseCase,
          useValue: { execute: jest.fn() },
        },
        {
          provide: FindAllActivitiesUseCase,
          useValue: { execute: jest.fn() },
        },
        {
          provide: EditActivityUseCase,
          useValue: { execute: jest.fn() },
        },
      ],
    }).compile();

    controller = module.get<ActivityController>(ActivityController);
    createActivityUseCase = module.get<CreateActivityUseCase>(
      CreateActivityUseCase,
    );
    deleteActivityUseCase = module.get<DeleteActivityUseCase>(
      DeleteActivityUseCase,
    );
    findActivityByIdUseCase = module.get<FindActivityByIdUseCase>(
      FindActivityByIdUseCase,
    );
    findAllActivitiesUseCase = module.get<FindAllActivitiesUseCase>(
      FindAllActivitiesUseCase,
    );
    editActivityUseCase = module.get<EditActivityUseCase>(EditActivityUseCase);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create an activity', async () => {
    const body = { name: 'New Activity', description: 'Activity Description' };
    await controller.createActivity(body);

    expect(createActivityUseCase.execute).toHaveBeenCalledWith(body);
  });

  it('should find an activity by id', async () => {
    const id = '1';
    const activity = { id, name: 'Activity', description: 'Description' };
    (findActivityByIdUseCase.execute as jest.Mock).mockResolvedValue(activity);

    const result = await controller.findActivityById(id);
    expect(findActivityByIdUseCase.execute).toHaveBeenCalledWith({
      activity_id: id,
    });
    expect(result).toEqual(activity);
  });

  it('should find all activities', async () => {
    const activities = [
      { id: '1', name: 'Activity 1', description: 'Description 1' },
      { id: '2', name: 'Activity 2', description: 'Description 2' },
    ];
    (findAllActivitiesUseCase.execute as jest.Mock).mockResolvedValue(
      activities,
    );

    const result = await controller.findAllActivities();
    expect(findAllActivitiesUseCase.execute).toHaveBeenCalled();
    expect(result).toEqual(activities);
  });
  it('should edit an activity', async () => {
    const id = '1';
    const body = {
      name: 'Updated Activity',
      description: 'Updated Description',
    };
    const updatedActivity = { id, ...body };
    (editActivityUseCase.execute as jest.Mock).mockResolvedValue(
      updatedActivity,
    );

    const result = await controller.editActivity(id, body);
    expect(editActivityUseCase.execute).toHaveBeenCalledWith({
      activity_id: id,
      ...body,
    });
    expect(result).toEqual(updatedActivity);
  });

  it('should delete an activity', async () => {
    const id = '1';
    await controller.deleteActivity(id);
    expect(deleteActivityUseCase.execute).toHaveBeenCalledWith({
      activity_id: id,
    });
  });
});
