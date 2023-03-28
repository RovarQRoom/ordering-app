import { Injectable } from '@nestjs/common';
import { CreateOrdersDto, ReadOrdersDto } from '../Dto/orders.dto';
import { OrdersRepository } from '../repository/orders.repository';
import { IOrdersService } from '../interface/Iorders.service.interface';

@Injectable()
export class OrdersService implements IOrdersService {
  constructor(private readonly ordersRepository:OrdersRepository) {}

  async createOrders(createOrdersDto: CreateOrdersDto): Promise<CreateOrdersDto> {
    await this.ordersRepository.create(createOrdersDto);
    return createOrdersDto;
  }

  async getOrders(): Promise<ReadOrdersDto[]> {
    const orders = await this.ordersRepository.find({});
    const readOrders = new Array<ReadOrdersDto>();
    orders.forEach((order) => {
      readOrders.push({
        name: order.name,
        price: order.price,
        phonenumber: order.phonenumber,
      });
    });
    if(!orders) throw new Error('No orders found');
    return readOrders;
  }
}
