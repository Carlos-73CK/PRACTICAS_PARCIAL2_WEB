import { Injectable } from '@nestjs/common';
import { CreateRecursoDto } from './dto/create-recurso.dto';
import { UpdateRecursoDto } from './dto/update-recurso.dto';
import { InjectRepository } from '@nestjs/typeorm'; // Importa InjectRepository
import { Repository } from 'typeorm'; // Importa Repository
import { Recurso } from './entities/recurso.entity'; // Importa la entidad Recurso

@Injectable()
export class RecursoService {
  constructor(
    @InjectRepository(Recurso) // Inyecta el repositorio de la entidad Recurso
    private recursoRepository: Repository<Recurso>,
  ) {}

  async create(createRecursoDto: CreateRecursoDto): Promise<Recurso> {
    const newRecurso = this.recursoRepository.create(createRecursoDto);
    return this.recursoRepository.save(newRecurso);
  }

  async findAll(): Promise<Recurso[]> {
    return this.recursoRepository.find();
  }

  async findOne(id: number): Promise<Recurso> {
    return this.recursoRepository.findOne({ where: { id } });
  }

  async update(id: number, updateRecursoDto: UpdateRecursoDto): Promise<Recurso> {
    // Asegúrate de que el ID del DTO coincida con el ID del parámetro
    if (updateRecursoDto.id && updateRecursoDto.id !== id) {
      throw new Error('ID mismatch in update operation');
    }
    await this.recursoRepository.update(id, updateRecursoDto);
    return this.findOne(id); // Retorna el recurso actualizado
  }

  async remove(id: number): Promise<void> {
    await this.recursoRepository.delete(id);
  }
}