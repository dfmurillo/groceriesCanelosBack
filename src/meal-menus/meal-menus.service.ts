import { Injectable } from '@nestjs/common';
import { CreateMealMenuDto } from './dto/create-meal-menu.dto';
import { UpdateMealMenuDto } from './dto/update-meal-menu.dto';

@Injectable()
export class MealMenusService {
  create(createMealMenuDto: CreateMealMenuDto) {
    return 'This action adds a new mealMenu';
  }

  findAll() {
    return `This action returns all mealMenus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mealMenu`;
  }

  update(id: number, updateMealMenuDto: UpdateMealMenuDto) {
    return `This action updates a #${id} mealMenu`;
  }

  remove(id: number) {
    return `This action removes a #${id} mealMenu`;
  }
}
