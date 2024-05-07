import { Test, TestingModule } from '@nestjs/testing';
import { MenuTagsController } from './menu-tags.controller';
import { MenuTagsService } from './menu-tags.service';

describe('MenuTagsController', () => {
  let controller: MenuTagsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuTagsController],
      providers: [MenuTagsService],
    }).compile();

    controller = module.get<MenuTagsController>(MenuTagsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
