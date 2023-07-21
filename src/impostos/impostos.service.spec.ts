import { Test, TestingModule } from '@nestjs/testing';
import { ImpostosService } from './impostos.service';

describe('ImpostosService', () => {
  let service: ImpostosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImpostosService],
    }).compile();

    service = module.get<ImpostosService>(ImpostosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
