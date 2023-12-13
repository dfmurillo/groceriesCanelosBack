import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmService } from './type-orm.service';
import { AppConfigModule } from '../app/app-config.module';

describe('TypeOrmService', () => {
  let service: TypeOrmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppConfigModule],
      providers: [TypeOrmService],
    }).compile();

    service = module.get<TypeOrmService>(TypeOrmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
