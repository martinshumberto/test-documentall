import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ListingEntity } from './listing.entity';

type IListing = {
  phone: string;
  message: string;
  valid: boolean;
};

@Injectable()
export class ListingService {
  constructor(
    @InjectRepository(ListingEntity)
    private repository: Repository<ListingEntity>,
  ) {}

  async store(data: IListing): Promise<ListingEntity> {
    return await this.repository.save(data);
  }
}
