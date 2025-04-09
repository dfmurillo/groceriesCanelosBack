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
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Ingredients')
@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new ingredient' })
  @ApiBody({ type: CreateIngredientDto, description: 'The data for the new ingredient' })
  @ApiResponse({ status: 201, description: 'Ingredient successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad request. Validation failed.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
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
  @ApiOperation({ summary: 'Retrieve all ingredients' })
  @ApiResponse({ status: 200, description: 'List of ingredients retrieved successfully.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
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
  @ApiOperation({ summary: 'Update an ingredient by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the ingredient to update', example: '12345' })
  @ApiBody({ type: UpdateIngredientDto, description: 'The updated ingredient data' })
  @ApiResponse({ status: 200, description: 'Ingredient successfully updated.' })
  @ApiResponse({ status: 404, description: 'Ingredient not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
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
  @ApiOperation({ summary: 'Delete an ingredient by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the ingredient to delete', example: '12345' })
  @ApiResponse({ status: 200, description: 'Ingredient successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Ingredient not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
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
