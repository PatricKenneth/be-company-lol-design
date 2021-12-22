import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriceTableController } from './price-table.controller';
import { PriceTableRepository } from './price-table.repository';
import { PriceTableService } from './price-table.service';

@Module({
  imports: [TypeOrmModule.forFeature([PriceTableRepository])],
  providers: [PriceTableService],
  controllers: [PriceTableController],
  exports: [PriceTableService],
})
export class PriceTableModule {}
