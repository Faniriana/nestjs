import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { dataclient } from "./fakedata";

@Controller("client")
export class ClientController {
  @Get("/list")//route
  findAll() {
    return dataclient
  }
  // @Get("/one") //route
  // findOne() {
  //   return {
  //       id: 1,
  //       nom: "Rakoto"
  //     };
  // }
  @Get(":id")//route
  findOne(@Param("id")id) {
    const client = dataclient.find(p => p.id == id);
    if (client){
      return client
    }return{
      message : "client introuvable"
    }
  }
  @Post()
  create(@Body() client:any){
    return dataclient.push(client)//push = manampy valeur ao amina tableau(otra oe append)
  }
  @Delete(":id")
  supprimer(@Param("id")id){
    const client = dataclient.find(p=> p.id == id);
    const index = dataclient.indexOf(client);
    dataclient.splice(index, 1);
    return dataclient;
  }
}