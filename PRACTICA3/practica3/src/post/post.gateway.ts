import { WebSocketGateway, SubscribeMessage, MessageBody, ConnectedSocket, WsResponse } from '@nestjs/websockets';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Socket } from 'socket.io'; // Importa el tipo Socket de socket.io

@WebSocketGateway({
  cors: {
    origin: '*', // Permite conexiones desde cualquier origen (para desarrollo)
  },
})
export class PostGateway {
  constructor(private readonly postService: PostService) {}

  @SubscribeMessage('createPost')
  async create(@MessageBody() createPostDto: CreatePostDto): Promise<WsResponse<any>> {
    const post = await this.postService.create(createPostDto);
    return { event: 'postCreated', data: post };
  }

  @SubscribeMessage('findAllPosts')
  async findAll(): Promise<WsResponse<any>> {
    const posts = await this.postService.findAll();
    return { event: 'postsFound', data: posts };
  }

  @SubscribeMessage('findOnePost')
  async findOne(@MessageBody() id: number): Promise<WsResponse<any>> {
    const post = await this.postService.findOne(id);
    return { event: 'postFound', data: post };
  }

  @SubscribeMessage('updatePost')
  async update(@MessageBody() updatePostDto: UpdatePostDto): Promise<WsResponse<any>> {
    const updatedPost = await this.postService.update(updatePostDto.id, updatePostDto);
    return { event: 'postUpdated', data: updatedPost };
  }

  @SubscribeMessage('removePost')
  async remove(@MessageBody() id: number): Promise<WsResponse<any>> {
    await this.postService.remove(id);
    return { event: 'postRemoved', data: { id, message: 'Post removed successfully' } };
  }

  // Ejemplo de manejo de conexión/desconexión (opcional)
  handleConnection(@ConnectedSocket() client: Socket, ...args: any[]) {
    console.log(`Client connected: ${client.id}`);
    // Puedes emitir un evento a este cliente o realizar alguna lógica
    client.emit('connected', { message: `Welcome ${client.id}` });
  }

  handleDisconnect(@ConnectedSocket() client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }
}