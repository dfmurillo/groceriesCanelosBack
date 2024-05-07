import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  NotImplementedException,
  InternalServerErrorException,
  Patch,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Tags & Categories')
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

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    try {
      return await this.categoriesService.update(+id, updateCategoryDto);
    } catch (error) {
      switch (error.name) {
        case 'category.create':
          throw new InternalServerErrorException('Error updating the selected category');

        default:
          throw new NotImplementedException(error.name);
      }
    }
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
