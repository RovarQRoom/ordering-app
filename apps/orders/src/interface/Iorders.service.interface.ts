import { CreateOrdersDto } from "../Dto/create-order.dto";

export interface IOrdersService{
    createOrders(createOrdersDto: CreateOrdersDto): Promise<CreateOrdersDto>;
}