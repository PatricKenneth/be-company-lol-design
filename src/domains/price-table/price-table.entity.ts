import { BaseEntity } from '@infrastructure/database/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('price_table')
export class PriceTable extends BaseEntity {
  @Column()
  origin: number;
  @Column()
  destiny: number;
  @Column({ type: 'decimal' })
  price: number;
}
