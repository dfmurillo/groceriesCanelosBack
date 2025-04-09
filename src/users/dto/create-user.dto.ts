// Class validators https://dev.to/nithinkjoy/how-to-use-class-validator-and-return-custom-error-object-in-nestjs-562h
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'The nickname of the user', example: 'jdoe' })
  readonly slug: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'The name of the user', example: 'John' })
  name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'The lastname of the user', example: 'Doe' })
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ description: 'The email of the user', example: 'john.doe@example.com' })
  email: string;
}
