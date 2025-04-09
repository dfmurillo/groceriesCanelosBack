import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateIngredientDto {
  @ApiProperty({
    description: 'The name of the ingredient',
    example: 'Tomato',
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
