import { Test, TestingModule } from '@nestjs/testing';
import { IngredientTagsService } from './ingredient-tags.service';

describe('IngredientTagsService', () => {
  let service: IngredientTagsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IngredientTagsService],
    }).compile();

    service = module.get<IngredientTagsService>(IngredientTagsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
