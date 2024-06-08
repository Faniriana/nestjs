import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService){}
  create(createClientDto: any) {
      return this.prisma.client.create({data:createClientDto});
  }

  findAll() {
    return this.prisma.client.findMany()
  }

  findOne(id: number) {
    return this.prisma.client.findFirst({where:{id:id}})
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return this.prisma.client.update({data:updateClientDto,where:{id:id}})
  }

  remove(id: number) {
    return this.prisma.client.delete({where:{id:id}});
  }
}
