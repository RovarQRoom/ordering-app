import { CreateOrdersDto, ReadOrdersDto } from '../Dto/orders.dto';

export interface IOrdersService{
    createOrders(createOrdersDto: CreateOrdersDto): Promise<CreateOrdersDto>;
    getOrders(): Promise<ReadOrdersDto[]>;
}