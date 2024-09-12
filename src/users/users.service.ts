/* eslint-disable prettier/prettier */

import { Injectable, NotFoundException } from '@nestjs/common';  
import { CreateUserDto } from './dto/create-user.dto';  

@Injectable()  
export class UsersService {  
  private users: CreateUserDto[] = [];  
  private idCounter = 1; // Untuk mengelola ID pengguna  

  create(createUserDto: CreateUserDto) {  
    const userWithId = { id: this.idCounter++, ...createUserDto };  
    this.users.push(userWithId);  
    return userWithId;  
  }  

  findAll() {  
    return this.users;  
  }  

  findOne(id: number) {  
    const user = this.users.find(user => user.id === id);  
    if (!user) {  
      throw new NotFoundException(`User with ID ${id} not found`);  
    }  
    return user;  
  }  

  update(id: number, updateUserDto: CreateUserDto) {  
    const userIndex = this.users.findIndex(user => user.id === id);  
    if (userIndex === -1) {  
      throw new NotFoundException(`User with ID ${id} not found`);  
    }  
    const updatedUser = { ...this.users[userIndex], ...updateUserDto };  
    this.users[userIndex] = updatedUser;  
    return updatedUser;  
  }  

  remove(id: number) {  
    const userIndex = this.users.findIndex(user => user.id === id);  
    if (userIndex === -1) {  
      throw new NotFoundException(`User with ID ${id} not found`);  
    }  
    this.users.splice(userIndex, 1);  
    return { message: 'User deleted successfully' };  
  }  
}