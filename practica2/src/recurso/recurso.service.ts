import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRecursoInput } from './dto/create-recurso.input';
import { UpdateRecursoInput } from './dto/update-recurso.input';
import { Recurso } from './entities/recurso.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RecursoService {
  constructor(
    @InjectRepository(Recurso)
    private recursoRepository: Repository<Recurso>,
  ) {}

  create(createRecursoInput: CreateRecursoInput): Promise<Recurso> {
    const recurso = this.recursoRepository.create(createRecursoInput);
    return this.recursoRepository.save(recurso);
  }

  findAll(): Promise<Recurso[]> {
    return this.recursoRepository.find({ relations: ['post'] });
  }

  async findOne(id: number): Promise<Recurso> {
    const recurso = await this.recursoRepository.findOne({ where: { id }, relations: ['post'] });
    if (!recurso) {
      throw new NotFoundException(`Recurso con ID ${id} no encontrado`);
    }
    return recurso;
  }

  async update(id: number, updateRecursoInput: UpdateRecursoInput): Promise<Recurso> {
    await this.recursoRepository.update(id, updateRecursoInput);
    return this.findOne(id); // Esto ahora lanza una excepción si no se encuentra
  }

  async remove(id: number): Promise<void> {
    await this.recursoRepository.delete(id);
  }
}
