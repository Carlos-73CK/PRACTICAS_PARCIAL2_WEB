import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoRecursoService } from './tipo-recurso.service';
import { TipoRecursoResolver } from './tipo-recurso.resolver';
import { TipoRecurso } from './entities/tipo-recurso.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoRecurso])], 
  providers: [TipoRecursoService, TipoRecursoResolver],
})
export class TipoRecursoModule {}
