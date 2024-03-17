import { Test, TestingModule } from '@nestjs/testing';
import { SolicitationsController } from './solicitations.controller';

describe('SolicitationsController', () => {
  let controller: SolicitationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SolicitationsController],
    }).compile();

    controller = module.get<SolicitationsController>(SolicitationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
