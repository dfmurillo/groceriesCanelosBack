import { Injectable } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { Ingredient } from './entities/ingredient.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Repository } from 'typeorm';
import { GroceriesAppException } from '@/infra/errors/general.exception';

@Injectable()
export class IngredientsService {
  constructor(
    @InjectRepository(Ingredient)
    private readonly ingredientRepository: Repository<Ingredient>,
  ) {}

  async create(createIngredientDto: CreateIngredientDto | CreateIngredientDto[]) {
    const user = 2; // TODO
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
          ingredient.user = user;

          ingredientsToCreate.push(ingredient);
        }
      }

      return await this.ingredientRepository.save(ingredientsToCreate);
    } catch (error) {
      throw new GroceriesAppException('ingredient.create');
    }
  }

  async findAll(): Promise<Ingredient[]> {
    const user = 2; //TODO
    try {
      const ingredients = await this.ingredientRepository.find({
        relations: {
          ingredientTags: {
            tag: true,
          },
        },
        where: {
          user: Equal(user),
        },
        order: {
          name: 'ASC',
        },
      });

      return ingredients;
    } catch (error) {
      throw new GroceriesAppException('ingredient.get');
    }
  }

  async update(id: number, updateIngredientDto: UpdateIngredientDto) {
    try {
      const ingredient = new Ingredient();
      ingredient.name = updateIngredientDto.name;
      ingredient.id = id;

      return await this.ingredientRepository.save(ingredient);
    } catch (error) {
      throw new GroceriesAppException('ingredient.update');
    }
  }

  async remove(id: number) {
    try {
      const ingredient = new Ingredient();
      ingredient.id = id;

      return await this.ingredientRepository.remove(ingredient);
    } catch (error) {
      throw new GroceriesAppException('ingredient.remove');
    }
  }
}
