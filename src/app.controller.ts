import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

export class User {
  name: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.launcher();
  }

  @Post()
  postCall(@Body() payload: User) {
    return this.appService.postCall(payload);
  }
}
