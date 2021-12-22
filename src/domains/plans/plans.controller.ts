import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePlansDTO } from './dtos/create-plans.dto';
import { Plans } from './plans.entity';
import { PlansService } from './plans.service';

@ApiTags('Plans')
@Controller('plans')
export class PlansController {
  constructor(private readonly plansService: PlansService) {}

  @Post()
  async create(@Body() create: CreatePlansDTO): Promise<Plans> {
    return this.plansService.create(create);
  }
}
