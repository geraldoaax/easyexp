import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmitenteService } from './emitente.service';
import { CreateEmitenteDto } from './dto/create-emitente.dto';
import { UpdateEmitenteDto } from './dto/update-emitente.dto';

@Controller('emitente')
export class EmitenteController {
  constructor(private readonly emitenteService: EmitenteService) {}

  @Post()
  create(@Body() createEmitenteDto: CreateEmitenteDto) {
    return this.emitenteService.create(createEmitenteDto);
  }

  @Get()
  findAll() {
    return this.emitenteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emitenteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmitenteDto: UpdateEmitenteDto) {
    return this.emitenteService.update(+id, updateEmitenteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.emitenteService.remove(+id);
  }
}
