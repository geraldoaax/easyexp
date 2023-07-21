import { Injectable } from '@nestjs/common';

import * as fs from 'fs';
import * as xml2js from 'xml2js';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {} // Inject prisma client service

  async readXmlFile(): Promise<any> {
    const parser = new xml2js.Parser({ explicitArray: false });
    let xmlData = fs.readFileSync('src/files/exemplo.xml', {
      encoding: 'utf-8',
    });

    let parsedData;
    parser.parseString(xmlData, (error, result) => {
      if (error) {
        throw new Error('Unable to parse XML');
      } else {
        parsedData = result;
      }
    });

    // Store the data in database
    const createdData = await this.prisma.nFeProc.create({
      data: {
        versao: parsedData.nfeProc.$.versao,
        xmlns: parsedData.nfeProc.$.xmlns,
        infNFe: parsedData.nfeProc.NFe.infNFe,
        Signature: parsedData.nfeProc.NFe.Signature,
        protNFe: parsedData.nfeProc.protNFe,
      },
    });

    return createdData;
  }
}
