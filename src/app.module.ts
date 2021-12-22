import { PlansModule } from '@domains/plans/plans.module';
import { PriceTableModule } from '@domains/price-table/price-table.module';
import { DatabaseModule } from '@infrastructure/database/database.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    PriceTableModule,
    PlansModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
