import { CreateOrdersDto } from '../Dto/create-order.dto';
import { Order } from '../schemas/order.schema';

export interface IOrdersRepository {
    createOrders(createOrdersDto: CreateOrdersDto): Promise<Order>;
}