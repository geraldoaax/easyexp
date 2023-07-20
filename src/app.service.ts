import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as xml2js from 'xml2js';

@Injectable()
export class AppService {
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
    return parsedData;
  }
}
