import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoRecursoDto } from './create-tipo-recurso.dto';
import { IsNumber, IsNotEmpty } from 'class-validator';

export class UpdateTipoRecursoDto extends PartialType(CreateTipoRecursoDto) {
    @IsNumber()
    @IsNotEmpty()
    id: number;
}