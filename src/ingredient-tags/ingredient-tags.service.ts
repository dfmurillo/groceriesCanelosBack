import { Injectable } from '@nestjs/common';
import { CreateIngredientTagDto } from './dto/create-ingredient-tag.dto';
import { GroceriesAppException } from '@/infra/errors/general.exception';
import { IngredientTag } from './entities/ingredient-tag.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingredient } from '@/ingredients/entities/ingredient.entity';
import { Tag } from '@/tags/entities/tag.entity';

@Injectable()
export class IngredientTagsService {
  constructor(
    @InjectRepository(IngredientTag)
    private readonly ingredientTagRepository: Repository<IngredientTag>,
  ) {}

  async create(createIngredientTagDto: CreateIngredientTagDto) {
    try {
      const ingredient = new Ingredient();
      ingredient.id = createIngredientTagDto.ingredient;

      const tag = new Tag();
      tag.id = createIngredientTagDto.tag;

      const ingredientTag = new IngredientTag();
      ingredientTag.ingredient = ingredient;
      ingredientTag.tag = tag;

      return await this.ingredientTagRepository.save(ingredientTag);
    } catch (error) {
      throw new GroceriesAppException('ingredientTag.create');
    }
  }

  async remove(id: number) {
    try {
      const ingredientTag = new IngredientTag();
      ingredientTag.id = id;

      return await this.ingredientTagRepository.remove(ingredientTag);
    } catch (error) {
      throw new GroceriesAppException('ingredientTag.remove');
    }
  }
}
