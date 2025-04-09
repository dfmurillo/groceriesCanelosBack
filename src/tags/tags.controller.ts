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
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Tags & Categories')
@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new tag' })
  @ApiBody({ type: CreateTagDto, description: 'The data for the new tag' })
  @ApiResponse({ status: 201, description: 'Tag successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad request. Validation failed.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
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
  @ApiOperation({ summary: 'Retrieve all tags' })
  @ApiResponse({ status: 200, description: 'List of tags retrieved successfully.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  findAll() {
    return this.tagsService.findAll();
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a tag by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the tag to update', example: '12345' })
  @ApiBody({ type: UpdateTagDto, description: 'The updated tag data' })
  @ApiResponse({ status: 200, description: 'Tag successfully updated.' })
  @ApiResponse({ status: 404, description: 'Tag not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
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
  @ApiOperation({ summary: 'Delete a tag by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the tag to delete', example: '12345' })
  @ApiResponse({ status: 200, description: 'Tag successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Tag not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
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
