import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { Order } from '../schemas/order.schema';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { IOrdersRepository } from '../interface/Iorders.interface';


@Injectable()
export class OrdersRepository extends AbstractRepository<Order> implements IOrdersRepository {
    protected readonly logger = new Logger(OrdersRepository.name);
  constructor(
    @InjectModel(Order.name) private readonly orderModel: Model<Order>, 
    @InjectConnection() connection: Connection
    ) {
        super(orderModel, connection);
    }
}