import { IsNotEmpty, IsPhoneNumber, IsPositive, IsString } from "class-validator";

export class CreateOrdersDto {

 @IsString()
 @IsNotEmpty()
 name: string;

 @IsPositive()
 price: number;

 @IsPhoneNumber("IQ")
 phonenumber:string;

}

export class ReadOrdersDto {

 @IsString()
 @IsNotEmpty()
 name: string;

 @IsPositive()
 price: number;

 @IsPhoneNumber("IQ")
 phonenumber:string;

}