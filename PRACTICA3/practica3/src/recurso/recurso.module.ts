import { Module } from '@nestjs/common';
import { RecursoService } from './recurso.service';
import { RecursoGateway } from './recurso.gateway';
import { TypeOrmModule } from '@nestjs/typeorm'; // Importa TypeOrmModule
import { Recurso } from './entities/recurso.entity'; // Importa la entidad Recurso

@Module({
  imports: [TypeOrmModule.forFeature([Recurso])], // Esto hace que el repositorio de Recurso esté disponible
  providers: [RecursoGateway, RecursoService],
  exports: [RecursoService] // Exporta el servicio por si otras partes de la app lo necesitan
})
export class RecursoModule {}