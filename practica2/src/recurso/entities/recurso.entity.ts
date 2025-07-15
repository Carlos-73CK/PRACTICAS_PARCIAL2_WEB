   import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
   import { ObjectType, Field } from '@nestjs/graphql';
   import { Post } from '../../post/entities/post.entity'; 

   @ObjectType()
   @Entity()
   export class Recurso {
     @Field()
     @PrimaryGeneratedColumn()
     id: number;

     @Field()
     @Column()
     nombre: string;

     @Field()
     @Column()
     tipo: string;

     @Field(() => Post) // Exponer la relación a GraphQL
     @ManyToOne(() => Post, (post) => post.recursos) // Definir la relación
     post: Post; // Propiedad que representa la relación
   }
   