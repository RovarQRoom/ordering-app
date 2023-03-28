import { Inject, Injectable } from '@nestjs/common';
import { CreateOrdersDto, ReadOrdersDto } from '../Dto/orders.dto';
import { OrdersRepository } from '../repository/orders.repository';
import { IOrdersService } from '../interface/Iorders.service.interface';
import { BILLING_SERVICE } from '../constants/services';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class OrdersService implements IOrdersService {
  constructor(
    private readonly ordersRepository:OrdersRepository, 
    @Inject(BILLING_SERVICE) private readonly billingClient: ClientProxy
    ) {}

  async createOrders(createOrdersDto: CreateOrdersDto): Promise<CreateOrdersDto> {
    const session = await this.ordersRepository.startTransaction();
    try {
      const createOrder = await this.ordersRepository.create(createOrdersDto);
      await lastValueFrom(
        this.billingClient.emit('order_created', createOrder)
      );
      await session.commitTransaction();
      return createOrdersDto;
    } catch (error) {
      await session.abortTransaction();
      throw error;
    }
    
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
