import { PartialType } from '@nestjs/swagger';
import { CreateMenuTagDto } from './create-menu-tag.dto';

export class UpdateMenuTagDto extends PartialType(CreateMenuTagDto) {
  id: number;
  menu?: number;
  tag?: number;
}
