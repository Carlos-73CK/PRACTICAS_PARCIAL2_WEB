import { IsString } from 'class-validator';

export class CreateTipoRecursoDto {
  @IsString()
  nombre: string; // Nombre del tipo de recurso
}
