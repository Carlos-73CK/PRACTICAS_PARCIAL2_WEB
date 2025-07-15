import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTipoRecursoDto {
  @ApiProperty({ description: 'Nombre del tipo de recurso (ej. Imagen, Video)', example: 'Imagen' })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({ description: 'Descripción del tipo de recurso', example: 'Archivos de imagen', required: false })
  @IsString()
  @IsOptional() // La descripción es opcional
  descripcion?: string;

  @ApiProperty({ description: 'Código único para el tipo de recurso (ej. IMG, VID)', example: 'IMG' })
  @IsString()
  @IsNotEmpty()
  codigo: string;
}