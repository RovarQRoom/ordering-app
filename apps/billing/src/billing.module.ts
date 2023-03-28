import { Module } from '@nestjs/common';
import { BillingController } from './controller/billing.controller';
import { BillingService } from './service/billing.service';
import { RmqModule } from '@app/common';

@Module({
  imports: [RmqModule],
  controllers: [BillingController],
  providers: [BillingService],
})
export class BillingModule {}
