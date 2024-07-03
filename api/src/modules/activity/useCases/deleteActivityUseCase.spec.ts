import { ActivityNotFoundException } from '../exceptions/activityNotFound';
import { ActivityRepositoryInMemory } from '../repositories/activityRepositoryInMemory';
import { CreateActivityUseCase } from './createActivityUseCase';
import { DeleteActivityUseCase } from './deleteActivityUseCase';

let createActivityUseCase: CreateActivityUseCase;
let deleteActivityUseCase: DeleteActivityUseCase;
let activityRepositoryInMemory: ActivityRepositoryInMemory;

describe('Delete activity', () => {
  beforeEach(() => {
    activityRepositoryInMemory = new ActivityRepositoryInMemory();
    createActivityUseCase = new CreateActivityUseCase(
      activityRepositoryInMemory,
    );
    deleteActivityUseCase = new DeleteActivityUseCase(
      activityRepositoryInMemory,
    );
  });

  it('Should be able to delete a activity', async () => {
    const activity = await createActivityUseCase.execute({
      name: 'andar de bicicleta',
      description: 'andar de bicicleta no parque',
    });

    await deleteActivityUseCase.execute({
      activity_id: activity.id,
    });

    expect(activityRepositoryInMemory.activities).toEqual([]);
  });

  it('should not be able do delete activity if activity id is not the correct', async () => {
    await expect(
      deleteActivityUseCase.execute({
        activity_id: 'wrong id',
      }),
    ).rejects.toThrow(ActivityNotFoundException);
  });
});
