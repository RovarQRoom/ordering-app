import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common/database/abstract.schema';


@Schema({ versionKey: false })
export class Order extends AbstractDocument {
  // ...
  @Prop({ type: String, required: true })
    name: string;

  @Prop({ type: String, required: true })
    price: number;

  @Prop({ type: String, required: true })
    phonenumber: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);