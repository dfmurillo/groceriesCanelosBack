import { Injectable } from '@nestjs/common';
import { CreateMenuIngredientDto } from './dto/create-menu-ingredient.dto';
import { UpdateMenuIngredientDto } from './dto/update-menu-ingredient.dto';
import { GroceriesAppException } from '@/infra/errors/general.exception';
import { MenuIngredient } from './entities/menu-ingredient.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ingredient } from '@/ingredients/entities/ingredient.entity';
import { Menu } from '@/menus/entities/menu.entity';

@Injectable()
export class MenuIngredientsService {
  constructor(
    @InjectRepository(MenuIngredient)
    private readonly menuIngredientRepository: Repository<MenuIngredient>,
  ) {}

  async create(
    createMenuIngredientDto: CreateMenuIngredientDto | CreateMenuIngredientDto[],
  ): Promise<MenuIngredient[]> {
    try {
      if (!Array.isArray(createMenuIngredientDto)) {
        createMenuIngredientDto = [createMenuIngredientDto];
      }

      const menuIngredientsToCreate = [];
      for (const key in createMenuIngredientDto) {
        if (Object.prototype.hasOwnProperty.call(createMenuIngredientDto, key)) {
          const menuIngredientDto = createMenuIngredientDto[key];
          const ingredient = new Ingredient();
          ingredient.id = menuIngredientDto.ingredient;

          const menu = new Menu();
          menu.id = menuIngredientDto.menu;

          const menuIngredient = new MenuIngredient();
          menuIngredient.menu = menu;
          menuIngredient.ingredient = ingredient;
          menuIngredient.ingredientQuantity = menuIngredientDto.ingredientQuantity;
          menuIngredient.ingredientQuantityType = menuIngredientDto.ingredientQuantityType;

          menuIngredientsToCreate.push(menuIngredient);
        }
      }

      return await this.menuIngredientRepository.save(menuIngredientsToCreate);
    } catch (error) {
      throw new GroceriesAppException('menuIngredient.create');
    }
  }

  async update(
    id: number,
    updateMenuIngredientDto: UpdateMenuIngredientDto,
  ): Promise<MenuIngredient> {
    try {
      const menuIngredient = new MenuIngredient();
      menuIngredient.id = id;
      menuIngredient.ingredientQuantity = updateMenuIngredientDto.ingredientQuantity;
      menuIngredient.ingredientQuantityType = updateMenuIngredientDto.ingredientQuantityType;

      return await this.menuIngredientRepository.save(menuIngredient);
    } catch (error) {
      throw new GroceriesAppException('menuIngredient.update');
    }
  }

  async remove(id: number) {
    try {
      const menuIngredient = new MenuIngredient();
      menuIngredient.id = id;

      return await this.menuIngredientRepository.remove(menuIngredient);
    } catch (error) {
      throw new GroceriesAppException('ingredient.remove');
    }
  }
}
