import { Test, TestingModule } from '@nestjs/testing';
import { MenuTagsService } from './menu-tags.service';

describe('MenuTagsService', () => {
  let service: MenuTagsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuTagsService],
    }).compile();

    service = module.get<MenuTagsService>(MenuTagsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
