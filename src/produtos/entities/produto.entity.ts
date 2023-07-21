import { Produtos } from '@prisma/client';

export class ProdutosEntity implements Produtos {
  id: number;
  NCM: string;
  CFOP: string;
  cEAN: string;
  qCom: number;
  uCom: string;
  cProd: string;
  qTrib: number;
  uTrib: string;
  vProd: number;
  xProd: string;
  indTot: string;
  vUnCom: number;
  vUnTrib: number;
  cEANTrib: string;
}
