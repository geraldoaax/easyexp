import { Module } from '@nestjs/common';
import { EmitenteService } from './emitente.service';
import { EmitenteController } from './emitente.controller';

@Module({
  controllers: [EmitenteController],
  providers: [EmitenteService]
})
export class EmitenteModule {}
