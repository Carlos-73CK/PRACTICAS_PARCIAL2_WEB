     import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

     @Entity()
     export class Post {
       @PrimaryGeneratedColumn()
       id: number;

       @Column()
       titulo: string;

       @Column()
       contenido: string;

       @Column()
       fechaCreacion: Date;

       @Column()
       autorId: number;
     }
     