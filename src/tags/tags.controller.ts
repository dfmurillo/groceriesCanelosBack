import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  InternalServerErrorException,
  NotImplementedException,
  Patch,
} from '@nestjs/common';
import { TagsService } from './tags.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post()
  async create(@Body() createTagDto: CreateTagDto | CreateTagDto[]) {
    try {
      return await this.tagsService.create(createTagDto);
    } catch (error) {
      switch (error.name) {
        case 'tag.create':
          throw new InternalServerErrorException('Error removing the selected tag');

        default:
          throw new NotImplementedException(error.name);
      }
    }
  }

  @Get()
  findAll() {
    return this.tagsService.findAll();
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTagDto: UpdateTagDto) {
    try {
      return await this.tagsService.update(+id, updateTagDto);
    } catch (error) {
      switch (error.name) {
        case 'tag.update':
          throw new InternalServerErrorException('Error updating the selected tag');

        default:
          throw new NotImplementedException(error.name);
      }
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.tagsService.remove(+id);
    } catch (error) {
      switch (error.name) {
        case 'tag.delete':
          throw new InternalServerErrorException('Error removing the selected category');

        default:
          throw new NotImplementedException(error.name);
      }
    }
  }
}
