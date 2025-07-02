import { IsString, IsNumber} from 'class-validator';

export class CreatePostDto {
  @IsString()
  titulo: string;

  @IsString()
  contenido: string;

  @IsString() 
  fechaCreacion: string; 

  @IsNumber()
  autorId: number;
}
