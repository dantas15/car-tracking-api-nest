import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Global() // By using Global it will be accesible in any submodule
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
