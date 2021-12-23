import { Injectable } from '@nestjs/common';
import { CreatePriceTableDTO } from './dtos/create-price-table.dto';
import { PriceTable } from './price-table.entity';
import { PriceTableRepository } from './price-table.repository';

@Injectable()
export class PriceTableService {
  constructor(private readonly priceTableRepository: PriceTableRepository) {}

  async create(create: CreatePriceTableDTO): Promise<PriceTable> {
    const { origin, destiny, price } = create;
    const priceTable = new PriceTable();
    priceTable.origin = origin;
    priceTable.destiny = destiny;
    priceTable.price = price;

    return this.priceTableRepository.save(priceTable);
  }

  async get(): Promise<PriceTable[]> {
    return this.priceTableRepository.find();
  }
}
