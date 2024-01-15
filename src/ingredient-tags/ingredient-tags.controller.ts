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

@Controller('ingredient-tags')
export class IngredientTagsController {
  constructor(private readonly ingredientTagsService: IngredientTagsService) {}

  @Post()
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
