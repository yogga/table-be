/* eslint-disable prettier/prettier */

import { IsEmail, IsNotEmpty } from 'class-validator';  

export class CreateUserDto {
  id?: number;   
  @IsNotEmpty()  
  firstName: string;  

  @IsNotEmpty()  
  lastName: string;  

  @IsNotEmpty()  
  position: string;  

  @IsNotEmpty()  
  phone: string;  

  @IsEmail()  
  email: string;  
}