import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PriceTableService } from './price-table.service';

@ApiTags('Price Table')
@Controller('price-table')
export class PriceTableController {
  constructor(private readonly priceTableService: PriceTableService) {}
}
