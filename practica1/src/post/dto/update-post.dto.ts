import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {}
// src/post/dto/update-post.dto.ts
// Este DTO extiende de CreatePostDto, permitiendo que todos los campos sean opcionales
// y se puedan actualizar individualmente.
