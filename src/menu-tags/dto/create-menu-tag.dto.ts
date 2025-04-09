import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty } from 'class-validator';

export class CreateMenuTagDto {
  @ApiProperty({
    description: 'The ID of the menu to associate with the tag',
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  menu: number;

  @ApiProperty({
    description: 'The ID of the tag to associate with the menu',
    example: 2,
  })
  @IsNumber()
  @IsNotEmpty()
  tag: number;
}
