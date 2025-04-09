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
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';

@ApiTags('Menu Ingredients')
@Controller('menu-ingredients')
export class MenuIngredientsController {
  constructor(private readonly menuIngredientsService: MenuIngredientsService) {}

  @ApiOperation({ summary: 'Create one or multiple menu ingredients' })
  @ApiBody({
    type: [CreateMenuIngredientDto],
    description: 'The data for creating one or multiple menu ingredients',
  })
  @ApiResponse({ status: 201, description: 'Menu ingredient(s) successfully created.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
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

  @ApiOperation({ summary: 'Update a specific menu ingredient by ID' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the menu ingredient to update',
    example: '12345',
  })
  @ApiBody({
    type: UpdateMenuIngredientDto,
    description: 'The updated data for the menu ingredient',
  })
  @ApiResponse({ status: 200, description: 'Menu ingredient successfully updated.' })
  @ApiResponse({ status: 404, description: 'Menu ingredient not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMenuIngredientDto: UpdateMenuIngredientDto) {
    try {
      return await this.menuIngredientsService.update(+id, updateMenuIngredientDto);
    } catch (error) {
      switch (error.name) {
        case 'menuIngredient.update':
          throw new InternalServerErrorException('Error updating the menu ingredient');

        default:
          throw new NotImplementedException(error);
      }
    }
  }

  @ApiOperation({ summary: 'Delete a specific menu ingredient by ID' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the menu ingredient to delete',
    example: '12345',
  })
  @ApiResponse({ status: 200, description: 'Menu ingredient successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Menu ingredient not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.menuIngredientsService.remove(+id);
    } catch (error) {
      switch (error.name) {
        case 'menuIngredient.remove':
          throw new InternalServerErrorException('Error removing the menu ingredient');

        default:
          throw new NotImplementedException(error);
      }
    }
  }
}
