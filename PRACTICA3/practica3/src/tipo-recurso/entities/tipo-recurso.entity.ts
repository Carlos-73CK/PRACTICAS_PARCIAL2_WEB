import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TipoRecurso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true }) // El nombre del tipo de recurso debería ser único
  nombre: string; // Ej. "Imagen", "Video", "Documento"

  @Column({ nullable: true }) // La descripción es opcional
  descripcion: string;

  @Column({ unique: true }) // El código del tipo también debería ser único
  codigo: string; // Ej. "IMG", "VID", "DOC"
}