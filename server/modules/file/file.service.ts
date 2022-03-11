import { Injectable } from '@nestjs/common';

@Injectable()
export class FileService {
  uploadCsv(): string {
    return 'Init API!';
  }
}
