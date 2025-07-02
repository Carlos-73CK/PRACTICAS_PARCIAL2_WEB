   import { InputType, Field } from '@nestjs/graphql';
   import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

   @InputType()
   export class CreatePostInput {
     @Field()
     @IsString()
     @IsNotEmpty()
     titulo: string;

     @Field()
     @IsString()
     @IsNotEmpty()
     contenido: string;

     @Field()
     @IsDateString()
     fechaCreacion: string; 

     @Field()
     tipoRecursoId: number; 
   }
   