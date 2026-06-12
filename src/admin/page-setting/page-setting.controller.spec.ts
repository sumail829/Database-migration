import { Test, TestingModule } from '@nestjs/testing';
import { PageSettingController } from './page-setting.controller';
import { PageSettingService } from './page-setting.service';

describe('PageSettingController', () => {
  let controller: PageSettingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PageSettingController],
      providers: [PageSettingService],
    }).compile();

    controller = module.get<PageSettingController>(PageSettingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
