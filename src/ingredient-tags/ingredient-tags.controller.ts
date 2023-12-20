import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IngredientTagsService } from './ingredient-tags.service';
import { CreateIngredientTagDto } from './dto/create-ingredient-tag.dto';
import { UpdateIngredientTagDto } from './dto/update-ingredient-tag.dto';

@Controller('ingredient-tags')
export class IngredientTagsController {
  constructor(private readonly ingredientTagsService: IngredientTagsService) {}

  @Post()
  create(@Body() createIngredientTagDto: CreateIngredientTagDto) {
    return this.ingredientTagsService.create(createIngredientTagDto);
  }

  @Get()
  findAll() {
    return this.ingredientTagsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ingredientTagsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIngredientTagDto: UpdateIngredientTagDto) {
    return this.ingredientTagsService.update(+id, updateIngredientTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingredientTagsService.remove(+id);
  }
}
