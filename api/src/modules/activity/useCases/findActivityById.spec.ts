import { ActivityNotFoundException } from '../exceptions/activityNotFound';
import { ActivityRepositoryInMemory } from '../repositories/activityRepositoryInMemory';
import { CreateActivityUseCase } from './createActivityUseCase';
import { EditActivityUseCase } from './editActivityUseCase';
import { FindActivityByIdUseCase } from './findActivityById';

let findActivityByIdUseCase: FindActivityByIdUseCase;
let activityRepositoryInMemory: ActivityRepositoryInMemory;
let createActivityUseCase: CreateActivityUseCase;

describe('Find activity by id', () => {
  beforeEach(() => {
    activityRepositoryInMemory = new ActivityRepositoryInMemory();
    createActivityUseCase = new CreateActivityUseCase(
      activityRepositoryInMemory,
    );
    findActivityByIdUseCase = new FindActivityByIdUseCase(
      activityRepositoryInMemory,
    );
  });

  it('Should be able to find a activity by id', async () => {
    const activity = await createActivityUseCase.execute({
      name: 'andar de bicicleta',
      description: 'andar de bicicleta no parque',
    });

    const activityEdited = await findActivityByIdUseCase.execute({
      activity_id: activity.id,
    });

    expect(activityEdited).toEqual(activity);
  });

  it('Should not be able to find a activity by id with a wrong activity id', async () => {
    await expect(
      findActivityByIdUseCase.execute({
        activity_id: 'activity.id',
      }),
    ).rejects.toThrow(ActivityNotFoundException);
  });
});
