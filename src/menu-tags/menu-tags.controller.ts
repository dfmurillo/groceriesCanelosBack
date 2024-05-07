import {
  Controller,
  Post,
  Body,
  Param,
  Delete,
  InternalServerErrorException,
  NotImplementedException,
} from '@nestjs/common';
import { MenuTagsService } from './menu-tags.service';
import { CreateMenuTagDto } from './dto/create-menu-tag.dto';
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
  async create(@Body() createMenuTagDto: CreateMenuTagDto) {
    try {
      return await this.menuTagsService.create(createMenuTagDto);
    } catch (error) {
      switch (error.name) {
        case 'menuTag.create':
          throw new InternalServerErrorException('Error creating menu tag');

        default:
          throw new NotImplementedException(error);
      }
    }
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
  async remove(@Param('id') id: string) {
    try {
      return await this.menuTagsService.remove(+id);
    } catch (error) {
      switch (error.name) {
        case 'menuTag.remove':
          throw new InternalServerErrorException('Error removing menu tag');

        default:
          throw new NotImplementedException(error);
      }
    }
  }
}
