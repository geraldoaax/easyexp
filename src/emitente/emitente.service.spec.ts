import { Test, TestingModule } from '@nestjs/testing';
import { EmitenteService } from './emitente.service';

describe('EmitenteService', () => {
  let service: EmitenteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmitenteService],
    }).compile();

    service = module.get<EmitenteService>(EmitenteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
