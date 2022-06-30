import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    var teste;
    teste = 'string A';
    return teste;
  }
}
