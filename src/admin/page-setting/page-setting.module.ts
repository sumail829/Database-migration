import { Module } from '@nestjs/common';
import { PageSettingService } from './page-setting.service';
import { PageSettingController } from './page-setting.controller';

@Module({
  controllers: [PageSettingController],
  providers: [PageSettingService],
})
export class PageSettingModule {}
