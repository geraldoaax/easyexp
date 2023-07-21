import { Injectable } from '@nestjs/common';
import { CreateEmitenteDto } from './dto/create-emitente.dto';
import { UpdateEmitenteDto } from './dto/update-emitente.dto';

@Injectable()
export class EmitenteService {
  create(createEmitenteDto: CreateEmitenteDto) {
    return 'This action adds a new emitente';
  }

  findAll() {
    return `This action returns all emitente`;
  }

  findOne(id: number) {
    return `This action returns a #${id} emitente`;
  }

  update(id: number, updateEmitenteDto: UpdateEmitenteDto) {
    return `This action updates a #${id} emitente`;
  }

  remove(id: number) {
    return `This action removes a #${id} emitente`;
  }
}
