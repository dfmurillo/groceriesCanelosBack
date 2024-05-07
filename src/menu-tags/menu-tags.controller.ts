import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenuTagsService } from './menu-tags.service';
import { CreateMenuTagDto } from './dto/create-menu-tag.dto';
import { UpdateMenuTagDto } from './dto/update-menu-tag.dto';

@Controller('menu-tags')
export class MenuTagsController {
  constructor(private readonly menuTagsService: MenuTagsService) {}

  @Post()
  create(@Body() createMenuTagDto: CreateMenuTagDto) {
    return this.menuTagsService.create(createMenuTagDto);
  }

  @Get()
  findAll() {
    return this.menuTagsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuTagsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenuTagDto: UpdateMenuTagDto) {
    return this.menuTagsService.update(+id, updateMenuTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuTagsService.remove(+id);
  }
}
