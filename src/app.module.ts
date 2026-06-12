import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BlogModule } from './admin/blog/blog.module';
import { BlogCategoryModule } from './admin/blog-category/blog-category.module';
import { PageSettingModule } from './admin/page-setting/page-setting.module';
import { ServiceModule } from './admin/service/service.module';

@Module({
  imports: [UserModule, BlogModule, BlogCategoryModule, PageSettingModule, ServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
