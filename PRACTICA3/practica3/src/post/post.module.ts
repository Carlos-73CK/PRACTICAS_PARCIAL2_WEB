import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostGateway } from './post.gateway';
import { TypeOrmModule } from '@nestjs/typeorm'; // Importa TypeOrmModule
import { Post } from './entities/post.entity'; // Importa la entidad Post

@Module({
  imports: [TypeOrmModule.forFeature([Post])], // Esto hace que el repositorio de Post esté disponible
  providers: [PostGateway, PostService],
  exports: [PostService] // Exporta el servicio por si otras partes de la app lo necesitan
})
export class PostModule {}