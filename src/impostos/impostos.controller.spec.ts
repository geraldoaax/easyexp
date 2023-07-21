import { Test, TestingModule } from '@nestjs/testing';
import { ImpostosController } from './impostos.controller';
import { ImpostosService } from './impostos.service';

describe('ImpostosController', () => {
  let controller: ImpostosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImpostosController],
      providers: [ImpostosService],
    }).compile();

    controller = module.get<ImpostosController>(ImpostosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
