import { IsString, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'; // Opcional, para swagger

export class CreatePostDto {
  @ApiProperty({ description: 'El título del post', example: 'Mi primer post' })
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @ApiProperty({ description: 'El contenido del post', example: 'Este es el cuerpo de mi post.' })
  @IsString()
  @IsNotEmpty()
  contenido: string;

  @ApiProperty({ description: 'Indica si el post está publicado', example: true, required: false })
  @IsBoolean()
  @IsOptional()
  publicado?: boolean; // Hacemos opcional porque la entidad tiene un default
}