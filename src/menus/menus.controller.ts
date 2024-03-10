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

@Controller('menus')
export class MenusController {
  constructor(private readonly menusService: MenusService) {}

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
