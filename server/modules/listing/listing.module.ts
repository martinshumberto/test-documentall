import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListingController } from './listing.controller';
import { ListingEntity } from './listing.entity';
import { ListingService } from './listing.service';

@Module({
  imports: [TypeOrmModule.forFeature([ListingEntity])],
  controllers: [ListingController],
  providers: [ListingService],
})
export class ListingModule {}
