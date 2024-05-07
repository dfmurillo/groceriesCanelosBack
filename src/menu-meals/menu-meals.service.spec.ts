import { Test, TestingModule } from '@nestjs/testing';
import { MenuMealsService } from './menus-meals.service';

describe('MealMenusService', () => {
  let service: MenuMealsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuMealsService],
    }).compile();

    service = module.get<MenuMealsService>(MenuMealsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
