import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { ProdutosModule } from './produtos/produtos.module';
import { EmitenteModule } from './emitente/emitente.module';
import { DestinatarioModule } from './destinatario/destinatario.module';
import { ImpostosModule } from './impostos/impostos.module';

@Module({
  imports: [ProdutosModule, EmitenteModule, DestinatarioModule, ImpostosModule],
  controllers: [],
  providers: [AppService, PrismaService],
})
export class AppModule {}
