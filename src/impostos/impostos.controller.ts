import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImpostosService } from './impostos.service';
import { CreateImpostoDto } from './dto/create-imposto.dto';
import { UpdateImpostoDto } from './dto/update-imposto.dto';

@Controller('impostos')
export class ImpostosController {
  constructor(private readonly impostosService: ImpostosService) {}

  @Post()
  create(@Body() createImpostoDto: CreateImpostoDto) {
    return this.impostosService.create(createImpostoDto);
  }

  @Get()
  findAll() {
    return this.impostosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.impostosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImpostoDto: UpdateImpostoDto) {
    return this.impostosService.update(+id, updateImpostoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.impostosService.remove(+id);
  }
}
