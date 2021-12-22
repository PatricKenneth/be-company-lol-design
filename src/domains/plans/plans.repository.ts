import { EntityRepository, Repository } from 'typeorm';
import { Plans } from './plans.entity';

@EntityRepository(Plans)
export class PlansRepository extends Repository<Plans> {}
