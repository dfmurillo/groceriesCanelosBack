import { Test, TestingModule } from '@nestjs/testing';
import { IngredientTagsController } from './ingredient-tags.controller';
import { IngredientTagsService } from './ingredient-tags.service';

describe('IngredientTagsController', () => {
  let controller: IngredientTagsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IngredientTagsController],
      providers: [IngredientTagsService],
    }).compile();

    controller = module.get<IngredientTagsController>(IngredientTagsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
