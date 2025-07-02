import { InputType, Field, Int } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateRecursoInput {
  @Field(() => Int)
  id: number;

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
