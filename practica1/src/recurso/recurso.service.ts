import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recurso } from './entities/recurso.entity';
import { CreateRecursoDto } from './dto/create-recurso.dto';
import { UpdateRecursoDto } from './dto/update-recurso.dto';

@Injectable()
export class RecursoService {
  constructor(
    @InjectRepository(Recurso)
    private readonly recursoRepository: Repository<Recurso>,
  ) {}

  async create(createRecursoDto: CreateRecursoDto): Promise<Recurso> {
    const recurso = this.recursoRepository.create(createRecursoDto);
    return await this.recursoRepository.save(recurso);
  }

  async findAll(): Promise<Recurso[]> {
    return await this.recursoRepository.find();
  }

  async findOne(id: number): Promise<Recurso> {
    const recurso = await this.recursoRepository.findOne({ where: { id } });
    if (!recurso) {
      throw new NotFoundException(`Recurso con ID ${id} no encontrado`);
    }
    return recurso;
  }

  async update(id: number, updateRecursoDto: UpdateRecursoDto): Promise<Recurso> {
    await this.recursoRepository.update(id, updateRecursoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.recursoRepository.delete(id);
  }
}
