import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoRecurso } from './entities/tipo-recurso.entity';
import { TipoRecursoService } from './tipo-recurso.service';
import { TipoRecursoController } from './tipo-recurso.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TipoRecurso])],
  controllers: [TipoRecursoController],
  providers: [TipoRecursoService],
})
export class TipoRecursoModule {}
