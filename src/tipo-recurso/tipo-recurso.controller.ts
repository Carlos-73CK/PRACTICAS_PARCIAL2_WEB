import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { TipoRecursoService } from './tipo-recurso.service';
import { CreateTipoRecursoDto } from './dto/create-tipo-recurso.dto';
import { UpdateTipoRecursoDto } from './dto/update-tipo-recurso.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('tipos-recurso')
@Controller('tipo-recurso')
export class TipoRecursoController {
  constructor(private readonly tipoRecursoService: TipoRecursoService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Tipo de recurso creado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  create(@Body() createTipoRecursoDto: CreateTipoRecursoDto) {
    return this.tipoRecursoService.create(createTipoRecursoDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Lista de tipos de recursos', type: [CreateTipoRecursoDto] })
  findAll() {
    return this.tipoRecursoService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Tipo de recurso encontrado', type: CreateTipoRecursoDto })
  @ApiResponse({ status: 404, description: 'Tipo de recurso no encontrado' })
  findOne(@Param('id') id: string) {
    return this.tipoRecursoService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Tipo de recurso actualizado', type: CreateTipoRecursoDto })
  @ApiResponse({ status: 404, description: 'Tipo de recurso no encontrado' })
  update(@Param('id') id: string, @Body() updateTipoRecursoDto: UpdateTipoRecursoDto) {
    return this.tipoRecursoService.update(+id, updateTipoRecursoDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 204, description: 'Tipo de recurso eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Tipo de recurso no encontrado' })
  remove(@Param('id') id: string) {
    return this.tipoRecursoService.remove(+id);
  }
}
