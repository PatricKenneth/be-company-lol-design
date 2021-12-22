import { EntityRepository, Repository } from 'typeorm';
import { PriceTable } from './price-table.entity';

@EntityRepository(PriceTable)
export class PriceTableRepository extends Repository<PriceTable> {}
