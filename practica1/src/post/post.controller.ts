import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('posts')
@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Post creado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Lista de posts', type: [CreatePostDto] }) // Cambia el tipo según tu DTO
  findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Post encontrado', type: CreatePostDto }) // Cambia el tipo según tu DTO
  @ApiResponse({ status: 404, description: 'Post no encontrado' })
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Post actualizado', type: CreatePostDto }) // Cambia el tipo según tu DTO
  @ApiResponse({ status: 404, description: 'Post no encontrado' })
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) { // Cambia a UpdatePostDto
    return this.postService.update(+id, updatePostDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 204, description: 'Post eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Post no encontrado' })
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }
}
