import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TipoRecursoService } from './tipo-recurso.service';
import { TipoRecurso } from './entities/tipo-recurso.entity';
import { CreateTipoRecursoInput } from './dto/create-tipo-recurso.input';
import { UpdateTipoRecursoInput } from './dto/update-tipo-recurso.input';

@Resolver(() => TipoRecurso)
export class TipoRecursoResolver {
  constructor(private readonly tipoRecursoService: TipoRecursoService) {}

  @Mutation(() => TipoRecurso)
  createTipoRecurso(@Args('createTipoRecursoInput') createTipoRecursoInput: CreateTipoRecursoInput) {
    return this.tipoRecursoService.create(createTipoRecursoInput);
  }

  @Query(() => [TipoRecurso], { name: 'tiposRecurso' })
  findAll() {
    return this.tipoRecursoService.findAll();
  }

  @Query(() => TipoRecurso, { name: 'tipoRecurso' })
  findOne(@Args('id') id: number) {
    return this.tipoRecursoService.findOne(id);
  }

  @Mutation(() => TipoRecurso)
  updateTipoRecurso(@Args('updateTipoRecursoInput') updateTipoRecursoInput: UpdateTipoRecursoInput) {
    return this.tipoRecursoService.update(updateTipoRecursoInput.id, updateTipoRecursoInput);
  }

  @Mutation(() => Boolean)
  removeTipoRecurso(@Args('id') id: number) {
    return this.tipoRecursoService.remove(id).then(() => true);
  }
}
