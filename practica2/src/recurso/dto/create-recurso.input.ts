import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateRecursoInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  url: string;

  @Field()
  postId: number; // Relación con Post
}
