import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PageSettingService } from './page-setting.service';
import { CreatePageSettingDto } from './dto/create-page-setting.dto';
import { UpdatePageSettingDto } from './dto/update-page-setting.dto';

@Controller('page-setting')
export class PageSettingController {
  constructor(private readonly pageSettingService: PageSettingService) {}

  @Post()
  create(@Body() createPageSettingDto: CreatePageSettingDto) {
    return this.pageSettingService.create(createPageSettingDto);
  }

  @Get()
  findAll() {
    return this.pageSettingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pageSettingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePageSettingDto: UpdatePageSettingDto) {
    return this.pageSettingService.update(+id, updatePageSettingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pageSettingService.remove(+id);
  }
}
