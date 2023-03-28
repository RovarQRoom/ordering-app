import { Controller, Get } from '@nestjs/common';
import { OrdersService } from '../service/orders.service';

@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  getHello(): string {
    return this.ordersService.getHello();
  }
}