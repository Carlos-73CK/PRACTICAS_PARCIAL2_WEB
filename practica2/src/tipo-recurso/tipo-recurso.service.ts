import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTipoRecursoInput } from './dto/create-tipo-recurso.input';
import { UpdateTipoRecursoInput } from './dto/update-tipo-recurso.input';
import { TipoRecurso } from './entities/tipo-recurso.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TipoRecursoService {
  constructor(
    @InjectRepository(TipoRecurso) // Asegúrate de que esto esté presente
    private tipoRecursoRepository: Repository<TipoRecurso>,
  ) {}

  create(createTipoRecursoInput: CreateTipoRecursoInput): Promise<TipoRecurso> {
    const tipoRecurso = this.tipoRecursoRepository.create(createTipoRecursoInput);
    return this.tipoRecursoRepository.save(tipoRecurso);
  }

  findAll(): Promise<TipoRecurso[]> {
    return this.tipoRecursoRepository.find();
  }

  async findOne(id: number): Promise<TipoRecurso> {
    const tipoRecurso = await this.tipoRecursoRepository.findOne({ where: { id } });
    if (!tipoRecurso) {
      throw new NotFoundException(`TipoRecurso con ID ${id} no encontrado`);
    }
    return tipoRecurso;
  }

  async update(id: number, updateTipoRecursoInput: UpdateTipoRecursoInput): Promise<TipoRecurso> {
    await this.tipoRecursoRepository.update(id, updateTipoRecursoInput);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.tipoRecursoRepository.delete(id);
  }
}
