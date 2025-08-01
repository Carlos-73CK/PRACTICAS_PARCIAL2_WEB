import { Test, TestingModule } from '@nestjs/testing';
import { TipoRecursoController } from './tipo-recurso.controller';
import { TipoRecursoService } from './tipo-recurso.service';

describe('TipoRecursoController', () => {
  let controller: TipoRecursoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoRecursoController],
      providers: [TipoRecursoService],
    }).compile();

    controller = module.get<TipoRecursoController>(TipoRecursoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
