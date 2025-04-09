import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  InternalServerErrorException,
  NotImplementedException,
} from '@nestjs/common';
import { MenuMealsService } from './menus-meals.service';
import { CreateMenuMealDto } from './dto/create-menu-meal.dto';
import { UpdateMenuMealDto } from './dto/update-menu-meal.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('Menus')
@Controller('menu-meals')
export class MenuMealsController {
  constructor(private readonly menuMealsService: MenuMealsService) {}

  @Post()
  async create(@Body() createMenuMealDto: CreateMenuMealDto | CreateMenuMealDto[]) {
    try {
      return await this.menuMealsService.create(createMenuMealDto);
    } catch (error) {
      switch (error.name) {
        case 'menuMeal.create':
          throw new InternalServerErrorException('Error creating menu meal');

        default:
          throw new NotImplementedException(error);
      }
    }
  }

  @Get('period')
  @ApiQuery({ name: 'date', required: true })
  @ApiQuery({ name: 'dateEnd', required: false })
  async findPeriod(@Query('date') date: string, @Query('dateEnd') dateEnd?: string) {
    try {
      return await this.menuMealsService.findPeriod(date, dateEnd);
    } catch (error) {
      switch (error.name) {
        case 'menuMeal.get.period':
          throw new InternalServerErrorException('Error getting the menu meal period');

        default:
          throw new NotImplementedException(error);
      }
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMenuMealDto: UpdateMenuMealDto[]) {
    try {
      return await this.menuMealsService.update(+id, updateMenuMealDto);
    } catch (error) {
      switch (error.name) {
        case 'menuMeal.update':
          throw new InternalServerErrorException('Error editing the menu meal');

        default:
          throw new NotImplementedException(error);
      }
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.menuMealsService.remove(+id);
    } catch (error) {
      switch (error.name) {
        case 'menuMeal.remove':
          throw new InternalServerErrorException('Error removing the menu meal');

        default:
          throw new NotImplementedException(error);
      }
    }
  }
}
