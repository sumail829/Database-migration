import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BlogModule } from './admin/blog/blog.module';
import { BlogCategoryModule } from './admin/blog-category/blog-category.module';
import { PageSettingModule } from './admin/page-setting/page-setting.module';
import { ServiceModule } from './admin/service/service.module';
import { AreaModule } from './area/area.module';
import { AuthModule } from './auth/auth.module';
import { CityModule } from './city/city.module';
import { CoreModule } from './core/core.module';
import { ProvinceModule } from './province/province.module';
import { CountryModule } from './country/country.module';

@Module({
  imports: [UserModule, BlogModule, BlogCategoryModule, PageSettingModule, ServiceModule, AreaModule, AuthModule, CityModule, CoreModule, ProvinceModule, CountryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
