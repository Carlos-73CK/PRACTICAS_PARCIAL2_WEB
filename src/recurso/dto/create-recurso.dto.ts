import { IsString, IsNumber } from 'class-validator';

export class CreateRecursoDto {
  @IsString()
  url: string;

  @IsString()
  tipo: string;

  @IsNumber()
  postId: number;
}
