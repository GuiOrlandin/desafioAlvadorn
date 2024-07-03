import { ActivityNotFoundException } from '../exceptions/activityNotFound';
import { ActivityRepositoryInMemory } from '../repositories/activityRepositoryInMemory';
import { CreateActivityUseCase } from './createActivityUseCase';
import { EditActivityUseCase } from './editActivityUseCase';
import { FindActivityByIdUseCase } from './findActivityById';
import { FindAllActivitiesUseCase } from './findAllActivities';

let findAllActivitiesUseCase: FindAllActivitiesUseCase;
let activityRepositoryInMemory: ActivityRepositoryInMemory;
let createActivityUseCase: CreateActivityUseCase;

describe('Find all activities', () => {
  beforeEach(() => {
    activityRepositoryInMemory = new ActivityRepositoryInMemory();
    createActivityUseCase = new CreateActivityUseCase(
      activityRepositoryInMemory,
    );
    findAllActivitiesUseCase = new FindAllActivitiesUseCase(
      activityRepositoryInMemory,
    );
  });

  it('Should be able to find all activities', async () => {
    await createActivityUseCase.execute({
      name: 'andar de bicicleta',
      description: 'andar de bicicleta no parque',
    });
    await createActivityUseCase.execute({
      name: 'andar de carro',
      description: 'andar de carro no parque',
    });

    const findAllActivities = await findAllActivitiesUseCase.execute();

    expect(findAllActivities).toHaveLength(2);
  });

  it('Should not be able to find all activities because dont have anyone', async () => {
    await expect(findAllActivitiesUseCase.execute()).rejects.toThrow(
      ActivityNotFoundException,
    );
  });
});
