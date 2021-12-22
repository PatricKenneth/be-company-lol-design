import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePriceTableDTO } from './dtos/create-price-table.dto';
import { PriceTable } from './price-table.entity';
import { PriceTableService } from './price-table.service';

@ApiTags('Price Table')
@Controller('price-table')
export class PriceTableController {
  constructor(private readonly priceTableService: PriceTableService) {}

  @Post()
  async create(@Body() create: CreatePriceTableDTO): Promise<PriceTable> {
    return this.priceTableService.create(create);
  }
}
