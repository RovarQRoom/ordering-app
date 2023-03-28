import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { Order } from '../schemas/order.schema';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { IOrdersRepository } from '../interface/Iorders.interface';
import { CreateOrdersDto } from '../Dto/create-order.dto';


@Injectable()
export class OrdersRepository extends AbstractRepository<Order> implements IOrdersRepository {
    protected readonly logger = new Logger(OrdersRepository.name);
  constructor(
    @InjectModel(Order.name) private readonly orderModel: Model<Order>, 
    @InjectConnection() connection: Connection
    ) {
        super(orderModel, connection);
    }
  createOrders(createOrdersDto: CreateOrdersDto): Promise<Order> {
    throw new Error('Method not implemented.');
  }
}