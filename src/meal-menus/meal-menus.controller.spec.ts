import { Test, TestingModule } from '@nestjs/testing';
import { MealMenusController } from './meal-menus.controller';
import { MealMenusService } from './meal-menus.service';

describe('MealMenusController', () => {
  let controller: MealMenusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MealMenusController],
      providers: [MealMenusService],
    }).compile();

    controller = module.get<MealMenusController>(MealMenusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
