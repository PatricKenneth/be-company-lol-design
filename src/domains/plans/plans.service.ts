import { Injectable } from '@nestjs/common';
import { CreatePlansDTO } from './dtos/create-plans.dto';
import { Plans } from './plans.entity';
import { PlansRepository } from './plans.repository';

@Injectable()
export class PlansService {
  constructor(private readonly plansRepository: PlansRepository) {}

  async create(create: CreatePlansDTO): Promise<Plans> {
    const { name, time } = create;
    const plans = new Plans();
    plans.name = name;
    plans.time = time;

    return this.plansRepository.save(plans);
  }
}
