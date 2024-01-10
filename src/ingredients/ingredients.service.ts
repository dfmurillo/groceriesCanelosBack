import { Injectable } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { Ingredient } from './entities/ingredient.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GroceriesAppException } from '@/infra/errors/general.exception';

@Injectable()
export class IngredientsService {
  constructor(
    @InjectRepository(Ingredient)
    private readonly ingredientRepository: Repository<Ingredient>,
  ) {}

  async create(createIngredientDto: CreateIngredientDto | CreateIngredientDto[]) {
    try {
      if (!Array.isArray(createIngredientDto)) {
        createIngredientDto = [createIngredientDto];
      }

      const ingredientsToCreate = [];
      for (const key in createIngredientDto) {
        if (Object.prototype.hasOwnProperty.call(createIngredientDto, key)) {
          const ingredientDto = createIngredientDto[key];

          const ingredient = new Ingredient();
          ingredient.name = ingredientDto.name.toLocaleLowerCase();
          ingredient.user = 2; //TODO

          ingredientsToCreate.push(ingredient);
        }
      }

      return await this.ingredientRepository.save(ingredientsToCreate);
    } catch (error) {
      throw new GroceriesAppException('ingredient.create');
    }
  }

  findAll() {
    return `This action returns all ingredients`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ingredient`;
  }

  update(id: number, updateIngredientDto: UpdateIngredientDto) {
    return `This action updates a #${id} ingredient`;
  }

  remove(id: number) {
    return `This action removes a #${id} ingredient`;
  }
}
