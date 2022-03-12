import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileEntity } from './file.entity';

type IListing = {
  nameFile: string;
};
@Injectable()
export class FileService {
  constructor(
    @InjectRepository(FileEntity)
    private repository: Repository<FileEntity>,
  ) {}

  async store(data: IListing): Promise<FileEntity> {
    return await this.repository.save(data);
  }
}
