import { Test, TestingModule } from '@nestjs/testing';
import { EmitenteController } from './emitente.controller';
import { EmitenteService } from './emitente.service';

describe('EmitenteController', () => {
  let controller: EmitenteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmitenteController],
      providers: [EmitenteService],
    }).compile();

    controller = module.get<EmitenteController>(EmitenteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
