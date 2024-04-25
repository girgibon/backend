import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length, IsEmail } from "class-validator";
export class CreateUserDto {
    
    @ApiProperty({example: 'user@gmail.com', description: "Email"})
    @IsString({message: 'Email must be a string'})
    @IsEmail({}, {message: 'Incorrect e-mail'})
    readonly email: string;
    @ApiProperty({example: '12345678', description: "Password"})
    @IsString({message: 'Must be a string'})
    @Length(8, 16, {message: 'Minimum 8, maximum 16 characters'})
    readonly password: string;
}