import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://abishake:Mongodb0805@jkcluster.qyeavcq.mongodb.net/tradealert?retryWrites=true&w=majority&appName=jkcluster',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
