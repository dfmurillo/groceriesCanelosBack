import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenuTagsService } from './menu-tags.service';
import { CreateMenuTagDto } from './dto/create-menu-tag.dto';
import { UpdateMenuTagDto } from './dto/update-menu-tag.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('Menus')
@Controller('menu-tags')
export class MenuTagsController {
  constructor(private readonly menuTagsService: MenuTagsService) {}

  @ApiOperation({ summary: 'Create a new menu-tag association' })
  @ApiBody({ type: CreateMenuTagDto, description: 'The data for the new menu-tag association' })
  @ApiResponse({ status: 201, description: 'Menu-tag association successfully created.' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  @Post()
  create(@Body() createMenuTagDto: CreateMenuTagDto) {
    return this.menuTagsService.create(createMenuTagDto);
  }

  @ApiOperation({ summary: 'Retrieve all menu-tag associations' })
  @ApiResponse({
    status: 200,
    description: 'List of menu-tag associations retrieved successfully.',
  })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  @Get()
  findAll() {
    return this.menuTagsService.findAll();
  }

  @ApiOperation({ summary: 'Retrieve a specific menu-tag association by ID' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the menu-tag association to retrieve',
    example: '12345',
  })
  @ApiResponse({ status: 200, description: 'Menu-tag association retrieved successfully.' })
  @ApiResponse({ status: 404, description: 'Menu-tag association not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuTagsService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update a specific menu-tag association by ID' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the menu-tag association to update',
    example: '12345',
  })
  @ApiBody({ type: UpdateMenuTagDto, description: 'The updated data for the menu-tag association' })
  @ApiResponse({ status: 200, description: 'Menu-tag association successfully updated.' })
  @ApiResponse({ status: 404, description: 'Menu-tag association not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenuTagDto: UpdateMenuTagDto) {
    return this.menuTagsService.update(+id, updateMenuTagDto);
  }

  @ApiOperation({ summary: 'Delete a specific menu-tag association by ID' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the menu-tag association to delete',
    example: '12345',
  })
  @ApiResponse({ status: 200, description: 'Menu-tag association successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Menu-tag association not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuTagsService.remove(+id);
  }
}
