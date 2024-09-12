/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';  
import { CreateUserDto } from './dto/create-user.dto';  

@Injectable()  
export class UsersService {  
  private users = [];  

  create(createUserDto: CreateUserDto) {  
    this.users.push(createUserDto);  
    return createUserDto;  
  }  

  findAll() {  
    return this.users;  
  }  
}