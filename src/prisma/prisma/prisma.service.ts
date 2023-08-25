import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  // PrismaService connect to the database when Nest
  // initializes the module.
  // this enables us to use everything PrismaClient has to offer
  async onModuleInit() {
    await this.$connect();
  }
}
