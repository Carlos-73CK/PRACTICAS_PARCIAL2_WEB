import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recurso } from './entities/recurso.entity';
import { RecursoService } from './recurso.service';
import { RecursoResolver } from './recurso.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Recurso])], // Asegúrate de que esto esté presente
  providers: [RecursoService, RecursoResolver],
})
export class RecursoModule {}
