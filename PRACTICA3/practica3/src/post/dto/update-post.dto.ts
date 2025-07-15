import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';
import { IsNumber, IsNotEmpty } from 'class-validator'; // Para validar el ID

export class UpdatePostDto extends PartialType(CreatePostDto) {
    // En una actualización, normalmente recibimos el ID del elemento a actualizar.
    // Aunque se pase por URL, es buena práctica tenerlo aquí si lo vas a usar en el DTO para validación.
    // Si no lo necesitas en el cuerpo del mensaje, puedes omitirlo.
    @IsNumber()
    @IsNotEmpty()
    id: number; // Añadimos el ID para validación si el cliente lo envía en el cuerpo
}