import { FileEntity } from 'modules/file/file.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'listing' })
export class ListingEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  phone: string;

  @Column({ type: 'varchar', nullable: false })
  message: string;

  @Column({ type: 'varchar', nullable: false, default: false })
  valid: boolean;

  @ManyToOne(() => FileEntity, (file: FileEntity) => file.listing)
  file: FileEntity;
}
