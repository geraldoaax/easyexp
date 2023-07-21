import { PartialType } from '@nestjs/mapped-types';
import { CreateImpostoDto } from './create-imposto.dto';

export class UpdateImpostoDto extends PartialType(CreateImpostoDto) {}
