   import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
   import { ObjectType, Field } from '@nestjs/graphql';
   import { Recurso } from '../../recurso/entities/recurso.entity'; 

   @ObjectType()
   @Entity()
   export class Post {
     @Field()
     @PrimaryGeneratedColumn()
     id: number;

     @Field()
     @Column()
     titulo: string;

     @Field()
     @Column()
     contenido: string;

     @Field()
     @Column()
     fechaCreacion: Date;

     @Field()
     @Column()
     tipoRecursoId: number;

     @Field(() => [Recurso]) // Exponer la relación a GraphQL
     @OneToMany(() => Recurso, (recurso) => recurso.post) 
     recursos: Recurso[];
   }
   