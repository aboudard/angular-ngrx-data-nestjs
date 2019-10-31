import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { LoggerMiddleware } from './common/logger.middleware';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';

@Module({
  imports: [TodoModule, InMemoryDBModule.forRoot({})],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('todo');
  }
}
