import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Recurso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string; // Ruta o enlace del recurso (imagen, video, etc.)

  @Column()
  tipo: string; // Tipo de recurso: 'imagen', 'video', 'documento'

  @Column()
  postId: number; // ID del post al que pertenece
}
