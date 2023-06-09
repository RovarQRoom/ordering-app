import { Module } from '@nestjs/common';
import { OrdersController } from './controller/orders.controller';
import { OrdersService } from './service/orders.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { DatabaseModule } from '@app/common/database/database.module';
import { OrdersRepository } from './repository/orders.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './schemas/order.schema';
import { RmqModule } from '@app/common/rmq/rmq.module';
import { BILLING_SERVICE } from './constants/services';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().default(3000),
      }),
      envFilePath: './apps/orders/.env',
    }), 
    DatabaseModule,
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    RmqModule.register({name: BILLING_SERVICE}),
  ],
  controllers: [OrdersController],
  providers: [OrdersService, OrdersRepository],
})
export class OrdersModule {}
