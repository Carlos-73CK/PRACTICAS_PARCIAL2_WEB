import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Recurso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  url: string; // URL o ubicación del recurso

  @Column()
  tipoMime: string; // Ej. "image/jpeg", "application/pdf"

  @Column({ type: 'int' }) // Usamos 'int' para números enteros
  tamanoKB: number; // Tamaño del recurso en kilobytes
}