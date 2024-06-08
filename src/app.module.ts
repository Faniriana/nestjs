import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientController } from './modules/client/client.controller';
import { ClientsModule } from './modules/clients/clients.module';
import { PrismaModule } from './common/prisma/prisma.module';


@Module({
  imports: [ClientsModule, PrismaModule],//refa icreer module de atao ao anatin'io tableau io
  controllers: [AppController, ClientController],//refa icreer controller de atao ao am appcontroller
  providers: [AppService],//refa icreer provider de atao ao am appservice
})
export class AppModule {}
