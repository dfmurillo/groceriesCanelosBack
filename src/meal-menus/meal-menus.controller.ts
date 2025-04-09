import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MealMenusService } from './meal-menus.service';
import { CreateMealMenuDto } from './dto/create-meal-menu.dto';
import { UpdateMealMenuDto } from './dto/update-meal-menu.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Menus')
@Controller('meal-menus')
export class MealMenusController {
  constructor(private readonly mealMenusService: MealMenusService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new meal menu association' })
  @ApiBody({ type: CreateMealMenuDto, description: 'The data for the new meal menu association' })
  @ApiResponse({ status: 201, description: 'Meal menu association successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad request. Validation failed.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  create(@Body() createMealMenuDto: CreateMealMenuDto) {
    return this.mealMenusService.create(createMealMenuDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all meal menu associations' })
  @ApiResponse({
    status: 200,
    description: 'List of meal menu associations retrieved successfully.',
  })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  findAll() {
    return this.mealMenusService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a specific meal menu association by ID' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the meal menu association to retrieve',
    example: '12345',
  })
  @ApiResponse({ status: 200, description: 'Meal menu association retrieved successfully.' })
  @ApiResponse({ status: 404, description: 'Meal menu association not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  findOne(@Param('id') id: string) {
    return this.mealMenusService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a specific meal menu association by ID' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the meal menu association to update',
    example: '12345',
  })
  @ApiBody({
    type: UpdateMealMenuDto,
    description: 'The updated data for the meal menu association',
  })
  @ApiResponse({ status: 200, description: 'Meal menu association successfully updated.' })
  @ApiResponse({ status: 404, description: 'Meal menu association not found.' })
  @ApiResponse({ status: 400, description: 'Bad request. Validation failed.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  update(@Param('id') id: string, @Body() updateMealMenuDto: UpdateMealMenuDto) {
    return this.mealMenusService.update(+id, updateMealMenuDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a specific meal menu association by ID' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the meal menu association to delete',
    example: '12345',
  })
  @ApiResponse({ status: 200, description: 'Meal menu association successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Meal menu association not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  remove(@Param('id') id: string) {
    return this.mealMenusService.remove(+id);
  }
}
