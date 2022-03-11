import { ListingEntity } from 'modules/listing/listing.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'file' })
export class FileEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  nameFile: string;

  @OneToMany(() => ListingEntity, (listing: ListingEntity) => listing.file, {
    eager: true,
  })
  @JoinColumn()
  listing: ListingEntity[];

  @Column()
  @CreateDateColumn()
  date: Date;
}
