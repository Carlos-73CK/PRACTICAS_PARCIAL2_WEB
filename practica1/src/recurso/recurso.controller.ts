import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { RecursoService } from './recurso.service';
import { CreateRecursoDto } from './dto/create-recurso.dto';
import { UpdateRecursoDto } from './dto/update-recurso.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('recurso')
@Controller('recurso')
export class RecursoController {
  constructor(private readonly recursoService: RecursoService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Recurso creado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  create(@Body() createRecursoDto: CreateRecursoDto) {
    return this.recursoService.create(createRecursoDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Lista de recursos', type: [CreateRecursoDto] })
  findAll() {
    return this.recursoService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Recurso encontrado', type: CreateRecursoDto })
  @ApiResponse({ status: 404, description: 'Recurso no encontrado' })
  findOne(@Param('id') id: string) {
    return this.recursoService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Recurso actualizado', type: CreateRecursoDto })
  @ApiResponse({ status: 404, description: 'Recurso no encontrado' })
  update(@Param('id') id: string, @Body() updateRecursoDto: UpdateRecursoDto) {
    return this.recursoService.update(+id, updateRecursoDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 204, description: 'Recurso eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Recurso no encontrado' })
  remove(@Param('id') id: string) {
    return this.recursoService.remove(+id);
  }
}
