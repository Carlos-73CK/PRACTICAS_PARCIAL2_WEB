import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RecursoService } from './recurso.service';
import { Recurso } from './entities/recurso.entity';
import { CreateRecursoInput } from './dto/create-recurso.input';
import { UpdateRecursoInput } from './dto/update-recurso.input';

@Resolver(() => Recurso)
export class RecursoResolver {
  constructor(private readonly recursoService: RecursoService) {}

  @Mutation(() => Recurso)
  createRecurso(@Args('createRecursoInput') createRecursoInput: CreateRecursoInput) {
    return this.recursoService.create(createRecursoInput);
  }

  @Query(() => [Recurso], { name: 'recursos' })
  findAll() {
    return this.recursoService.findAll();
  }

  @Query(() => Recurso, { name: 'recurso' })
  findOne(@Args('id') id: number) {
    return this.recursoService.findOne(id);
  }

  @Mutation(() => Recurso)
  updateRecurso(@Args('updateRecursoInput') updateRecursoInput: UpdateRecursoInput) {
    return this.recursoService.update(updateRecursoInput.id, updateRecursoInput);
  }

  @Mutation(() => Boolean)
  removeRecurso(@Args('id') id: number) {
    return this.recursoService.remove(id).then(() => true);
  }
}
