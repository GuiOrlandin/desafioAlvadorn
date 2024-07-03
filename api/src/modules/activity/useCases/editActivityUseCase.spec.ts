import { ActivityRepositoryInMemory } from '../repositories/activityRepositoryInMemory';
import { CreateActivityUseCase } from './createActivityUseCase';
import { EditActivityUseCase } from './editActivityUseCase';

let editActivityUseCase: EditActivityUseCase;
let activityRepositoryInMemory: ActivityRepositoryInMemory;
let createActivityUseCase: CreateActivityUseCase;

describe('Edit activity', () => {
  beforeEach(() => {
    activityRepositoryInMemory = new ActivityRepositoryInMemory();
    editActivityUseCase = new EditActivityUseCase(activityRepositoryInMemory);
    createActivityUseCase = new CreateActivityUseCase(
      activityRepositoryInMemory,
    );
  });

  it('Should be able to edit a activity', async () => {
    const activity = await createActivityUseCase.execute({
      name: 'andar de bicicleta',
      description: 'andar de bicicleta no parque',
    });

    const activityEdited = await editActivityUseCase.execute({
      activity_id: activity.id,
      name: 'Caminhar no parque',
      description: 'andar aos sábados no parque',
    });

    expect(activityRepositoryInMemory.activities[0]).toEqual(activityEdited);
  });
});
