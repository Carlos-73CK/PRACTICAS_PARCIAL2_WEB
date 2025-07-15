import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Importa los módulos de tus entidades
import { PostModule } from './post/post.module';
import { RecursoModule } from './recurso/recurso.module';
import { TipoRecursoModule } from './tipo-recurso/tipo-recurso.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'app.db', // El nombre de tu archivo de base de datos SQLite
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Esto detecta todas las entidades en tu proyecto
      synchronize: true, 
    }),
    PostModule,         
    RecursoModule,      
    TipoRecursoModule,  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}