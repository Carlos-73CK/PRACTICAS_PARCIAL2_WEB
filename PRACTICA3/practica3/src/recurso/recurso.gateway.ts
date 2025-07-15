import { WebSocketGateway, SubscribeMessage, MessageBody, ConnectedSocket, WsResponse } from '@nestjs/websockets';
import { RecursoService } from './recurso.service';
import { CreateRecursoDto } from './dto/create-recurso.dto';
import { UpdateRecursoDto } from './dto/update-recurso.dto';
import { Socket } from 'socket.io'; // Importa el tipo Socket de socket.io

@WebSocketGateway({
  cors: {
    origin: '*', // Permite conexiones desde cualquier origen (para desarrollo)
  },
})
export class RecursoGateway {
  constructor(private readonly recursoService: RecursoService) {}

  @SubscribeMessage('createRecurso')
  async create(@MessageBody() createRecursoDto: CreateRecursoDto): Promise<WsResponse<any>> {
    const recurso = await this.recursoService.create(createRecursoDto);
    return { event: 'recursoCreated', data: recurso };
  }

  @SubscribeMessage('findAllRecursos')
  async findAll(): Promise<WsResponse<any>> {
    const recursos = await this.recursoService.findAll();
    return { event: 'recursosFound', data: recursos };
  }

  @SubscribeMessage('findOneRecurso')
  async findOne(@MessageBody() id: number): Promise<WsResponse<any>> {
    const recurso = await this.recursoService.findOne(id);
    return { event: 'recursoFound', data: recurso };
  }

  @SubscribeMessage('updateRecurso')
  async update(@MessageBody() updateRecursoDto: UpdateRecursoDto): Promise<WsResponse<any>> {
    const updatedRecurso = await this.recursoService.update(updateRecursoDto.id, updateRecursoDto);
    return { event: 'recursoUpdated', data: updatedRecurso };
  }

  @SubscribeMessage('removeRecurso')
  async remove(@MessageBody() id: number): Promise<WsResponse<any>> {
    await this.recursoService.remove(id);
    return { event: 'recursoRemoved', data: { id, message: 'Recurso removed successfully' } };
  }

  // Ejemplo de manejo de conexión/desconexión 
  handleConnection(@ConnectedSocket() client: Socket, ...args: any[]) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(@ConnectedSocket() client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }
}