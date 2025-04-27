import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { User } from '@/users/entities/user.entity';
import { Category } from '@/categories/entities/category.entity';

export class SeedMenuDto {
  @ApiProperty({
    description: 'The name of the menu',
    example: 'Spaghetti Carbonara',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The description of the menu',
    example: 'Classic Italian pasta dish',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: 'The user that owns the menu',
    type: () => User,
  })
  user: User;

  @ApiProperty({
    description: 'The category of the menu',
    type: () => Category,
  })
  category: Category;
}
