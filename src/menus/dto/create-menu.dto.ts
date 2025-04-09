import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateMenuDto {
  @ApiPropertyOptional({
    description: 'The number of people the menu is designed for (optional)',
    example: 4,
  })
  @IsNumber()
  @IsOptional()
  menuPax?: number;

  @ApiProperty({
    description: 'The name of the menu',
    example: 'Dinner Specials',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional({
    description: 'Additional details about the menu (optional)',
    example: 'Includes appetizers, main course, and dessert.',
  })
  @IsString()
  @IsOptional()
  detail?: string;
}
