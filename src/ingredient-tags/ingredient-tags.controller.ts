import {
  Controller,
  Post,
  Body,
  Param,
  Delete,
  InternalServerErrorException,
  NotImplementedException,
} from '@nestjs/common';
import { IngredientTagsService } from './ingredient-tags.service';
import { CreateIngredientTagDto } from './dto/create-ingredient-tag.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Ingredients')
@Controller('ingredient-tags')
export class IngredientTagsController {
  constructor(private readonly ingredientTagsService: IngredientTagsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new ingredient-tag association' })
  @ApiBody({
    type: CreateIngredientTagDto,
    description: 'The data for the new ingredient-tag association',
  })
  @ApiResponse({ status: 201, description: 'Ingredient-tag association successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad request. Validation failed.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async create(@Body() createIngredientTagDto: CreateIngredientTagDto) {
    try {
      return await this.ingredientTagsService.create(createIngredientTagDto);
    } catch (error) {
      switch (error.name) {
        case 'ingredientTag.create':
          throw new InternalServerErrorException('Error creating ingredient tag');

        default:
          throw new NotImplementedException(error);
      }
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an ingredient-tag association by ID' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the ingredient-tag association to delete',
    example: '12345',
  })
  @ApiResponse({ status: 200, description: 'Ingredient-tag association successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Ingredient-tag association not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async remove(@Param('id') id: string) {
    try {
      return await this.ingredientTagsService.remove(+id);
    } catch (error) {
      switch (error.name) {
        case 'ingredientTag.remove':
          throw new InternalServerErrorException('Error removing ingredient tag');

        default:
          throw new NotImplementedException(error);
      }
    }
  }
}
