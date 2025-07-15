import { IsString, IsNotEmpty, IsUrl, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRecursoDto {
  @ApiProperty({ description: 'Nombre del recurso', example: 'Mi Imagen de Perfil' })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({ description: 'URL o ubicación del recurso', example: 'https://ejemplo.com/imagen.jpg' })
  @IsString()
  @IsNotEmpty()
  @IsUrl() // Valida que sea una URL válida
  url: string;

  @ApiProperty({ description: 'Tipo MIME del recurso (ej. image/jpeg)', example: 'image/jpeg' })
  @IsString()
  @IsNotEmpty()
  tipoMime: string;

  @ApiProperty({ description: 'Tamaño del recurso en kilobytes', example: 1024, type: Number })
  @IsNumber()
  @IsNotEmpty()
  tamanoKB: number;
}