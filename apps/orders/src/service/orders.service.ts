import { Injectable } from '@nestjs/common';
import { CreateOrdersDto } from '../Dto/create-order.dto';
import { OrdersRepository } from '../repository/orders.repository';
import { IOrdersService } from '../interface/Iorders.service.interface';

@Injectable()
export class OrdersService implements IOrdersService {
  constructor(private readonly ordersRepository:OrdersRepository) {}

  async createOrders(createOrdersDto: CreateOrdersDto): Promise<CreateOrdersDto> {
    await this.ordersRepository.createOrders(createOrdersDto);
    return createOrdersDto;
  }
}
