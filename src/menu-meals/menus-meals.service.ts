import { Injectable } from '@nestjs/common';
import { CreateMenuMealDto } from './dto/create-menu-meal.dto';
import { UpdateMenuMealDto } from './dto/update-menu-meal.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuMeal } from './entities/menu-meal.entity';
import { Repository } from 'typeorm';
import { Menu } from '@/menus/entities/menu.entity';
import { isValidDate } from '@/misc/CheckValidDate';
import { GroceriesAppException } from '@/infra/errors/general.exception';

type MenuMealsErrorsType = CreateMenuMealDto & {
  message: string;
};

@Injectable()
export class MenuMealsService {
  constructor(
    @InjectRepository(MenuMeal)
    private readonly menuMealRepository: Repository<MenuMeal>,
  ) {}

  async create(createMenuMealDto: CreateMenuMealDto | CreateMenuMealDto[]) {
    try {
      if (!Array.isArray(createMenuMealDto)) {
        createMenuMealDto = [createMenuMealDto];
      }

      const menuMealsCreate: MenuMeal[] = [];
      const menuMealsErrors: MenuMealsErrorsType[] = [];

      for (const key in createMenuMealDto) {
        if (Object.prototype.hasOwnProperty.call(createMenuMealDto, key)) {
          const menuMealDto = createMenuMealDto[key];

          if (!isValidDate(menuMealDto.mealDate)) {
            menuMealsErrors.push({
              ...menuMealDto,
              message: 'Invalid date',
            });
            continue;
          }

          const menu = new Menu(menuMealDto.menu);
          const menuMeal = new MenuMeal();
          menuMeal.menu = menu;
          menuMeal.mealOrder = menuMealDto.mealOrder;
          menuMeal.mealDate = new Date(menuMealDto.mealDate); // mm/dd/yyyy

          menuMealsCreate.push(menuMeal);
        }
      }

      return await this.menuMealRepository.save(menuMealsCreate);
    } catch (error) {
      throw new GroceriesAppException('menuMeal.create');
    }
  }

  findPeriod(date: string, dateEnd: string) {
    // return `This action returns a #${id} mealMenu`;
  }

  update(id: number, updateMenuMealDtos: UpdateMenuMealDto[]) {
    return `This action updates a #${id} mealMenu`;
  }

  remove(id: number) {
    return `This action removes a #${id} mealMenu`;
  }
}
