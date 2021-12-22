import { BaseEntity } from '@infrastructure/database/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('plans')
export class Plans extends BaseEntity {
  @Column()
  name: string;
  @Column()
  time: number;
}
