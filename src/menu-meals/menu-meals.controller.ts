import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenuMealsService } from './menus-meals.service';
import { CreateMenuMealDto } from './dto/create-menu-meal.dto';
import { UpdateMenuMealDto } from './dto/update-menu-meal.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Menus')
@Controller('menu-meals')
export class MenuMealsController {
  constructor(private readonly menuMealsService: MenuMealsService) {}

  @Post()
  create(@Body() createMenuMealDto: CreateMenuMealDto) {
    return this.menuMealsService.create(createMenuMealDto);
  }

  @Get()
  findAll() {
    return this.menuMealsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuMealsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenuMealDto: UpdateMenuMealDto) {
    return this.menuMealsService.update(+id, updateMenuMealDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuMealsService.remove(+id);
  }
}
