import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  InternalServerErrorException,
  NotImplementedException,
} from '@nestjs/common';
import { TagsService } from './tags.service';
import { CreateTagDto } from './dto/create-tag.dto';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post()
  async create(@Body() createTagDto: CreateTagDto | CreateTagDto[]) {
    try {
      return await this.tagsService.create(createTagDto);
    } catch (error) {
      switch (error.name) {
        case 'category.create':
          throw new InternalServerErrorException('Error removing the selected category');

        default:
          throw new NotImplementedException(error.name);
      }
    }
  }

  @Get()
  findAll() {
    return this.tagsService.findAll();
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
