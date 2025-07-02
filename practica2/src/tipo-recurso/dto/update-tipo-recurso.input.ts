import { InputType, Field, Int } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateTipoRecursoInput {
  @Field(() => Int)
  id: number;

  @Field()
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  descripcion: string;
}
