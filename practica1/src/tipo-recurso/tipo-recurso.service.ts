import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoRecurso } from './entities/tipo-recurso.entity';
import { CreateTipoRecursoDto } from './dto/create-tipo-recurso.dto';
import { UpdateTipoRecursoDto } from './dto/update-tipo-recurso.dto';

@Injectable()
export class TipoRecursoService {
  constructor(
    @InjectRepository(TipoRecurso)
    private readonly tipoRecursoRepository: Repository<TipoRecurso>,
  ) {}

  async create(createTipoRecursoDto: CreateTipoRecursoDto): Promise<TipoRecurso> {
    const tipoRecurso = this.tipoRecursoRepository.create(createTipoRecursoDto);
    return await this.tipoRecursoRepository.save(tipoRecurso);
  }

  async findAll(): Promise<TipoRecurso[]> {
    return await this.tipoRecursoRepository.find();
  }

  async findOne(id: number): Promise<TipoRecurso> {
    const tipoRecurso = await this.tipoRecursoRepository.findOne({ where: { id } });
    if (!tipoRecurso) {
      throw new NotFoundException(`Tipo de recurso con ID ${id} no encontrado`);
    }
    return tipoRecurso;
  }

  async update(id: number, updateTipoRecursoDto: UpdateTipoRecursoDto): Promise<TipoRecurso> {
    await this.tipoRecursoRepository.update(id, updateTipoRecursoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.tipoRecursoRepository.delete(id);
  }
}
