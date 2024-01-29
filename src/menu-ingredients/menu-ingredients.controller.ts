import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  InternalServerErrorException,
  NotImplementedException,
} from '@nestjs/common';
import { MenuIngredientsService } from './menu-ingredients.service';
import { CreateMenuIngredientDto } from './dto/create-menu-ingredient.dto';
import { UpdateMenuIngredientDto } from './dto/update-menu-ingredient.dto';

@Controller('menu-ingredients')
export class MenuIngredientsController {
  constructor(private readonly menuIngredientsService: MenuIngredientsService) {}

  @Post()
  async create(
    @Body() createMenuIngredientDto: CreateMenuIngredientDto | CreateMenuIngredientDto[],
  ) {
    try {
      return await this.menuIngredientsService.create(createMenuIngredientDto);
    } catch (error) {
      switch (error.name) {
        case 'menuIngredient.create':
          throw new InternalServerErrorException('Error creating ingredients on menu');

        default:
          throw new NotImplementedException(error);
      }
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMenuIngredientDto: UpdateMenuIngredientDto) {
    try {
      return await this.menuIngredientsService.update(+id, updateMenuIngredientDto);
    } catch (error) {
      switch (error.name) {
        case 'menuIngredient.update':
          throw new InternalServerErrorException('Error editing menu ingredient');

        default:
          throw new NotImplementedException(error);
      }
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.menuIngredientsService.remove(+id);
    } catch (error) {
      switch (error.name) {
        case 'menuIngredient.remove':
          throw new InternalServerErrorException('Error removing menu ingredient');

        default:
          throw new NotImplementedException(error);
      }
    }
  }
}
