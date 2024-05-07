import { Test, TestingModule } from '@nestjs/testing';
import { MenuMealsController } from './menu-meals.controller';
import { MenuMealsService } from './menus-meals.service';

describe('MealMenusController', () => {
  let controller: MenuMealsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuMealsController],
      providers: [MenuMealsService],
    }).compile();

    controller = module.get<MenuMealsController>(MenuMealsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
