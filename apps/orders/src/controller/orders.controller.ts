import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from '../service/orders.service';
import { CreateOrdersDto } from '../Dto/orders.dto';

@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post('create')
  async createOrders(@Body() createOrdersDto: CreateOrdersDto ) {
    return await this.ordersService.createOrders(createOrdersDto);
  }

  @Get('orders')
  async getOrders() {
    return await this.ordersService.getOrders();
  }
}
