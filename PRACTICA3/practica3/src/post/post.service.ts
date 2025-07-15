import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm'; // Importa InjectRepository
import { Repository } from 'typeorm'; // Importa Repository
import { Post } from './entities/post.entity'; // Importa la entidad Post

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) // Inyecta el repositorio de la entidad Post
    private postRepository: Repository<Post>,
  ) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const newPost = this.postRepository.create(createPostDto);
    return this.postRepository.save(newPost);
  }

  async findAll(): Promise<Post[]> {
    return this.postRepository.find();
  }

  async findOne(id: number): Promise<Post> {
    return this.postRepository.findOne({ where: { id } });
  }

  async update(id: number, updatePostDto: UpdatePostDto): Promise<Post> {
    // Asegúrate de que el ID del DTO coincida con el ID de la URL/parámetro
    if (updatePostDto.id && updatePostDto.id !== id) {
      throw new Error('ID mismatch in update operation');
    }
    await this.postRepository.update(id, updatePostDto);
    return this.findOne(id); // Retorna el post actualizado
  }

  async remove(id: number): Promise<void> {
    await this.postRepository.delete(id);
  }
}