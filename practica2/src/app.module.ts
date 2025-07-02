import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Post } from './post/entities/post.entity';
import { Recurso } from './recurso/entities/recurso.entity';
import { TipoRecurso } from './tipo-recurso/entities/tipo-recurso.entity';
import { PostModule } from './post/post.module';
import { RecursoModule } from './recurso/recurso.module';
import { TipoRecursoModule } from './tipo-recurso/tipo-recurso.module';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345', 
      database: 'practica2',
      entities: [Post, Recurso, TipoRecurso],
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver, // Agrega esta línea
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    PostModule,
    RecursoModule,
    TipoRecursoModule,
  ],
})
export class AppModule {}
