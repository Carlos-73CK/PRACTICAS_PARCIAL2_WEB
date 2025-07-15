import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TipoRecurso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string; // Nombre del tipo de recurso (ej. 'imagen', 'video', etc.)
}
