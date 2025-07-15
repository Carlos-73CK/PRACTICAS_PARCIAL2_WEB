import { Module } from '@nestjs/common';
import { TipoRecursoService } from './tipo-recurso.service';
import { TipoRecursoGateway } from './tipo-recurso.gateway';
import { TypeOrmModule } from '@nestjs/typeorm'; // Importa TypeOrmModule
import { TipoRecurso } from './entities/tipo-recurso.entity'; // Importa la entidad TipoRecurso

@Module({
  imports: [TypeOrmModule.forFeature([TipoRecurso])], // Esto hace que el repositorio de TipoRecurso esté disponible
  providers: [TipoRecursoGateway, TipoRecursoService],
  exports: [TipoRecursoService] // Exporta el servicio por si otras partes de la app lo necesitan
})
export class TipoRecursoModule {}