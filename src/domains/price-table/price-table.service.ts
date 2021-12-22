import { Injectable } from '@nestjs/common';
import { PriceTableRepository } from './price-table.repository';

@Injectable()
export class PriceTableService {
  constructor(private readonly priceTableRepository: PriceTableRepository) {}
}
