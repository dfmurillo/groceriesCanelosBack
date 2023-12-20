import { Test, TestingModule } from '@nestjs/testing';
import { MealMenusService } from './meal-menus.service';

describe('MealMenusService', () => {
  let service: MealMenusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MealMenusService],
    }).compile();

    service = module.get<MealMenusService>(MealMenusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
