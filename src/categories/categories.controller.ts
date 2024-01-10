import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  NotImplementedException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    try {
      return await this.categoriesService.create(createCategoryDto);
    } catch (error) {
      switch (error.name) {
        case 'category.create':
          throw new InternalServerErrorException('Error saving the category');

        default:
          throw new NotImplementedException(error.name);
      }
    }
  }

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.categoriesService.remove(+id);
    } catch (error) {
      switch (error.name) {
        case 'category.delete':
          throw new InternalServerErrorException('Error removing the selected category');

        default:
          throw new NotImplementedException(error.name);
      }
    }
  }
}
