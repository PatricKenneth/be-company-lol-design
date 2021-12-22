import { ApiProperty } from '@nestjs/swagger';

export class CreatePlansDTO {
  @ApiProperty({ example: 'Fale Mais 60' })
  name: string;
  @ApiProperty({ example: 60 })
  time: number;
}
