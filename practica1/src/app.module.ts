import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from './post/post.module';
import { RecursoModule } from './recurso/recurso.module';
import { TipoRecursoModule } from './tipo-recurso/tipo-recurso.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    PostModule,
    RecursoModule,
    TipoRecursoModule,
  ],
})
export class AppModule {}
