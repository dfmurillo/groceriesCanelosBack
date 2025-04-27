import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Category } from '@/categories/entities/category.entity';

export class SeedTagDto {
  @ApiProperty({
    description: 'The name of the tag',
    example: 'Vegetarian',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The category this tag belongs to',
    type: () => Category,
  })
  category: Category;
}
