import { Injectable } from '@nestjs/common';
import { CreateTipoRecursoDto } from './dto/create-tipo-recurso.dto';
import { UpdateTipoRecursoDto } from './dto/update-tipo-recurso.dto';
import { InjectRepository } from '@nestjs/typeorm'; // Importa InjectRepository
import { Repository } from 'typeorm'; // Importa Repository
import { TipoRecurso } from './entities/tipo-recurso.entity'; // Importa la entidad TipoRecurso

@Injectable()
export class TipoRecursoService {
  constructor(
    @InjectRepository(TipoRecurso) // Inyecta el repositorio de la entidad TipoRecurso
    private tipoRecursoRepository: Repository<TipoRecurso>,
  ) {}

  async create(createTipoRecursoDto: CreateTipoRecursoDto): Promise<TipoRecurso> {
    const newTipoRecurso = this.tipoRecursoRepository.create(createTipoRecursoDto);
    return this.tipoRecursoRepository.save(newTipoRecurso);
  }

  async findAll(): Promise<TipoRecurso[]> {
    return this.tipoRecursoRepository.find();
  }

  async findOne(id: number): Promise<TipoRecurso> {
    return this.tipoRecursoRepository.findOne({ where: { id } });
  }

  async update(id: number, updateTipoRecursoDto: UpdateTipoRecursoDto): Promise<TipoRecurso> {
    // Asegúrate de que el ID del DTO coincida con el ID del parámetro
    if (updateTipoRecursoDto.id && updateTipoRecursoDto.id !== id) {
      throw new Error('ID mismatch in update operation');
    }
    await this.tipoRecursoRepository.update(id, updateTipoRecursoDto);
    return this.findOne(id); // Retorna el tipo de recurso actualizado
  }

  async remove(id: number): Promise<void> {
    await this.tipoRecursoRepository.delete(id);
  }
}