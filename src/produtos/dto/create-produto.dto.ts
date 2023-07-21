import { IsNumber, IsString } from 'class-validator';

export class CreateProdutoDto {
  @IsNumber()
  id: number;

  @IsString()
  NCM: string;

  @IsString()
  CFOP: string;

  @IsString()
  cEAN: string;

  @IsNumber()
  qCom: number;

  @IsString()
  uCom: string;

  @IsString()
  cProd: string;

  @IsNumber()
  qTrib: number;

  @IsString()
  uTrib: string;

  @IsNumber()
  vProd: number;

  @IsString()
  xProd: string;

  @IsString()
  indTot: string;

  @IsNumber()
  vUnCom: number;

  @IsNumber()
  vUnTrib: number;

  @IsString()
  cEANTrib: string;
}
