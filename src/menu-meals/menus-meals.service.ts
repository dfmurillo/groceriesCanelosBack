import { Injectable } from '@nestjs/common';
import { CreateMenuMealDto } from './dto/create-menu-meal.dto';
import { UpdateMenuMealDto } from './dto/update-menu-meal.dto';

@Injectable()
export class MenuMealsService {
  create(createMenuMealDto: CreateMenuMealDto) {
    return 'This action adds a new mealMenu';
  }

  findAll() {
    return `This action returns all mealMenus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mealMenu`;
  }

  update(id: number, updateMenuMealDto: UpdateMenuMealDto) {
    return `This action updates a #${id} mealMenu`;
  }

  remove(id: number) {
    return `This action removes a #${id} mealMenu`;
  }
}
