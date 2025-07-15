import { InputType, Field, Int } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class UpdatePostInput {
  @Field(() => Int)
  id: number;

  @Field()
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  contenido: string;

  @Field()
  fechaCreacion: Date;

  @Field()
  tipoRecursoId: number; // Relación con TipoRecurso
}
