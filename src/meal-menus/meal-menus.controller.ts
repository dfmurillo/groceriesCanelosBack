import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MealMenusService } from './meal-menus.service';
import { CreateMealMenuDto } from './dto/create-meal-menu.dto';
import { UpdateMealMenuDto } from './dto/update-meal-menu.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Menus')
@Controller('meal-menus')
export class MealMenusController {
  constructor(private readonly mealMenusService: MealMenusService) {}

  @Post()
  create(@Body() createMealMenuDto: CreateMealMenuDto) {
    return this.mealMenusService.create(createMealMenuDto);
  }

  @Get()
  findAll() {
    return this.mealMenusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mealMenusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMealMenuDto: UpdateMealMenuDto) {
    return this.mealMenusService.update(+id, updateMealMenuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mealMenusService.remove(+id);
  }
}
