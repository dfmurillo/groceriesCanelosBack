import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  InternalServerErrorException,
  NotImplementedException,
} from '@nestjs/common';
import { MenusService } from './menus.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('Menus')
@Controller('menus')
export class MenusController {
  constructor(private readonly menusService: MenusService) {}

  @ApiOperation({ summary: 'Create a new menu' })
  @ApiBody({ type: CreateMenuDto, description: 'The data for the new menu' })
  @ApiResponse({ status: 201, description: 'Menu successfully created.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  @Post()
  async create(@Body() createMenuDto: CreateMenuDto) {
    try {
      return await this.menusService.create(createMenuDto);
    } catch (error) {
      switch (error.name) {
        case 'menu.create':
          throw new InternalServerErrorException('Error creating the menu');

        default:
          throw new NotImplementedException(error);
      }
    }
  }

  @ApiOperation({ summary: 'Retrieve all menus' })
  @ApiResponse({ status: 200, description: 'List of menus retrieved successfully.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  @Get()
  async findAll() {
    try {
      return await this.menusService.findAll();
    } catch (error) {
      switch (error.name) {
        case 'menu.findAll':
          throw new InternalServerErrorException('Error finding all the menus');

        default:
          throw new NotImplementedException(error);
      }
    }
  }

  @ApiOperation({ summary: 'Retrieve a specific menu by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the menu to retrieve', example: '12345' })
  @ApiResponse({ status: 200, description: 'Menu retrieved successfully.' })
  @ApiResponse({ status: 404, description: 'Menu not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.menusService.findOne(+id);
    } catch (error) {
      switch (error.name) {
        case 'menu.findOne':
          throw new InternalServerErrorException('Error finding the menu');

        default:
          throw new NotImplementedException(error);
      }
    }
  }

  @ApiOperation({ summary: 'Update a specific menu by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the menu to update', example: '12345' })
  @ApiBody({ type: UpdateMenuDto, description: 'The updated data for the menu' })
  @ApiResponse({ status: 200, description: 'Menu successfully updated.' })
  @ApiResponse({ status: 404, description: 'Menu not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
    try {
      return await this.menusService.update(+id, updateMenuDto);
    } catch (error) {
      switch (error.name) {
        case 'menu.update':
          throw new InternalServerErrorException('Error updating the menu');

        default:
          throw new NotImplementedException(error);
      }
    }
  }

  @ApiOperation({ summary: 'Delete a specific menu by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the menu to delete', example: '12345' })
  @ApiResponse({ status: 200, description: 'Menu successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Menu not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.menusService.remove(+id);
    } catch (error) {
      switch (error.name) {
        case 'menu.remove':
          throw new InternalServerErrorException('Error removing the menu');

        default:
          throw new NotImplementedException(error);
      }
    }
  }
}
