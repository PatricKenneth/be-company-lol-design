import { ApiProperty } from '@nestjs/swagger';

export class CreatePriceTableDTO {
  @ApiProperty({ example: 88 })
  origin: number;
  @ApiProperty({ example: 81 })
  destiny: number;
  @ApiProperty({ example: 1.57 })
  price: number;
}
