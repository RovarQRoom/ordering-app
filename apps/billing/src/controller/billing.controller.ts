import { Controller, Get } from '@nestjs/common';
import { BillingService } from '../service/billing.service';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';

@Controller()
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @EventPattern('order_created')
  async handleOrderCreated(@Payload() data: any, @Ctx() context: RmqContext) {
    await this.billingService.bill(data);
    console.log('Order created', data);
  }
}
