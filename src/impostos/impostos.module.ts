import { Module } from '@nestjs/common';
import { ImpostosService } from './impostos.service';
import { ImpostosController } from './impostos.controller';

@Module({
  controllers: [ImpostosController],
  providers: [ImpostosService]
})
export class ImpostosModule {}
