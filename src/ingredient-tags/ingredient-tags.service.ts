import { Injectable } from '@nestjs/common';
import { CreateIngredientTagDto } from './dto/create-ingredient-tag.dto';
import { UpdateIngredientTagDto } from './dto/update-ingredient-tag.dto';

@Injectable()
export class IngredientTagsService {
  create(createIngredientTagDto: CreateIngredientTagDto) {
    return 'This action adds a new ingredientTag';
  }

  findAll() {
    return `This action returns all ingredientTags`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ingredientTag`;
  }

  update(id: number, updateIngredientTagDto: UpdateIngredientTagDto) {
    return `This action updates a #${id} ingredientTag`;
  }

  remove(id: number) {
    return `This action removes a #${id} ingredientTag`;
  }
}
