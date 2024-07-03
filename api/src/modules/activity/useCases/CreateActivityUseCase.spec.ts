import { ActivityRepositoryInMemory } from '../repositories/activityRepositoryInMemory';
import { CreateActivityUseCase } from './CreateActivityUseCase';

let createActivityUseCase: CreateActivityUseCase;
let activityRepositoryInMemory: ActivityRepositoryInMemory;

describe('Create activity', () => {
  beforeEach(() => {
    activityRepositoryInMemory = new ActivityRepositoryInMemory();
    createActivityUseCase = new CreateActivityUseCase(
      activityRepositoryInMemory,
    );
  });

  it('Should be able to create a activity', async () => {
    const activity = await createActivityUseCase.execute({
      name: 'andar de bicicleta',
      description: 'andar de bicicleta no parque',
    });

    expect(activityRepositoryInMemory.activities[0]).toEqual(activity);
  });
});
