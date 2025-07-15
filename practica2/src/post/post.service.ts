import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async create(createPostInput: CreatePostInput): Promise<Post> {
  const newPost = this.postRepository.create({
    ...createPostInput,
    fechaCreacion: new Date(createPostInput.fechaCreacion), 
  });
  return await this.postRepository.save(newPost); 
}


  async findAll(): Promise<Post[]> {
    return await this.postRepository.find();
  }

  async findOne(id: number): Promise<Post> {
    const post = await this.postRepository.findOne({ where: { id } }); 
    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return post;
  }

  async update(id: number, updatePostInput: UpdatePostInput): Promise<Post> {
    await this.findOne(id); // Verificar que el post existe
    await this.postRepository.update(id, updatePostInput);
    return this.findOne(id); // Devolver el post actualizado
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id); // Verificar que el post existe
    await this.postRepository.delete(id);
  }
}
