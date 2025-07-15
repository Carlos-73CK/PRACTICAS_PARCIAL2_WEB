import { WebSocketGateway, SubscribeMessage, MessageBody, ConnectedSocket, WsResponse } from '@nestjs/websockets';
import { TipoRecursoService } from './tipo-recurso.service';
import { CreateTipoRecursoDto } from './dto/create-tipo-recurso.dto';
import { UpdateTipoRecursoDto } from './dto/update-tipo-recurso.dto';
import { Socket } from 'socket.io'; // Importa el tipo Socket de socket.io

@WebSocketGateway({
  cors: {
    origin: '*', // Permite conexiones desde cualquier origen (para desarrollo)
  },
})
export class TipoRecursoGateway {
  constructor(private readonly tipoRecursoService: TipoRecursoService) {}

  @SubscribeMessage('createTipoRecurso')
  async create(@MessageBody() createTipoRecursoDto: CreateTipoRecursoDto): Promise<WsResponse<any>> {
    const tipoRecurso = await this.tipoRecursoService.create(createTipoRecursoDto);
    return { event: 'tipoRecursoCreated', data: tipoRecurso };
  }

  @SubscribeMessage('findAllTipoRecursos')
  async findAll(): Promise<WsResponse<any>> {
    const tipoRecursos = await this.tipoRecursoService.findAll();
    return { event: 'tipoRecursosFound', data: tipoRecursos };
  }

  @SubscribeMessage('findOneTipoRecurso')
  async findOne(@MessageBody() id: number): Promise<WsResponse<any>> {
    const tipoRecurso = await this.tipoRecursoService.findOne(id);
    return { event: 'tipoRecursoFound', data: tipoRecurso };
  }

  @SubscribeMessage('updateTipoRecurso')
  async update(@MessageBody() updateTipoRecursoDto: UpdateTipoRecursoDto): Promise<WsResponse<any>> {
    const updatedTipoRecurso = await this.tipoRecursoService.update(updateTipoRecursoDto.id, updateTipoRecursoDto);
    return { event: 'tipoRecursoUpdated', data: updatedTipoRecurso };
  }

  @SubscribeMessage('removeTipoRecurso')
  async remove(@MessageBody() id: number): Promise<WsResponse<any>> {
    await this.tipoRecursoService.remove(id);
    return { event: 'tipoRecursoRemoved', data: { id, message: 'TipoRecurso removed successfully' } };
  }

  // Ejemplo de manejo de conexión/desconexión (opcional)
  handleConnection(@ConnectedSocket() client: Socket, ...args: any[]) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(@ConnectedSocket() client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }
}