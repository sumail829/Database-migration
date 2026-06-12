import { Injectable } from '@nestjs/common';
import { CreatePageSettingDto } from './dto/create-page-setting.dto';
import { UpdatePageSettingDto } from './dto/update-page-setting.dto';

@Injectable()
export class PageSettingService {
  create(createPageSettingDto: CreatePageSettingDto) {
    return 'This action adds a new pageSetting';
  }

  findAll() {
    return `This action returns all pageSetting`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pageSetting`;
  }

  update(id: number, updatePageSettingDto: UpdatePageSettingDto) {
    return `This action updates a #${id} pageSetting`;
  }

  remove(id: number) {
    return `This action removes a #${id} pageSetting`;
  }
}
