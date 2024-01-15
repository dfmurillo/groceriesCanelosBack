import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  InternalServerErrorException,
  NotImplementedException,
} from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';

@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) {}

  @Post()
  async create(@Body() createIngredientDto: CreateIngredientDto | CreateIngredientDto[]) {
    try {
      return await this.ingredientsService.create(createIngredientDto);
    } catch (error) {
      switch (error.name) {
        case 'ingredient.create':
          throw new InternalServerErrorException('Error creating ingredients');

        default:
          throw new NotImplementedException(error);
      }
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.ingredientsService.findAll();
    } catch (error) {
      switch (error.name) {
        case 'ingredient.get':
          throw new InternalServerErrorException('Error fetching ingredients');

        default:
          throw new NotImplementedException(error);
      }
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateIngredientDto: UpdateIngredientDto) {
    try {
      return await this.ingredientsService.update(+id, updateIngredientDto);
    } catch (error) {
      switch (error.name) {
        case 'ingredient.update':
          throw new InternalServerErrorException('Error updating the ingredient');

        default:
          throw new NotImplementedException(error);
      }
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.ingredientsService.remove(+id);
    } catch (error) {
      switch (error.name) {
        case 'ingredient.remove':
          throw new InternalServerErrorException('Error removing the ingredient');

        default:
          throw new NotImplementedException(error);
      }
    }
  }
}
