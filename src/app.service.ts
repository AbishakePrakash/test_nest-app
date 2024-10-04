import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  launcher() {
    console.log('CRM Launcher called');
    return 'CRM Launcher';
  }
}
