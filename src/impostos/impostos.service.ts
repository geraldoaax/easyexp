import { Injectable } from '@nestjs/common';
import { CreateImpostoDto } from './dto/create-imposto.dto';
import { UpdateImpostoDto } from './dto/update-imposto.dto';

@Injectable()
export class ImpostosService {
  create(createImpostoDto: CreateImpostoDto) {
    return 'This action adds a new imposto';
  }

  findAll() {
    return `This action returns all impostos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imposto`;
  }

  update(id: number, updateImpostoDto: UpdateImpostoDto) {
    return `This action updates a #${id} imposto`;
  }

  remove(id: number) {
    return `This action removes a #${id} imposto`;
  }
}
