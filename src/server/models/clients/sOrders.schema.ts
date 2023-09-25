import { Schema, Model, Document } from "mongoose";
import { OrderStatus, Status } from '../types'

export interface SOrders extends Document {
  sOrederNum: number;
  clientNum: string,
  soroderStatus: OrderStatus,
  productsPrice: number,
  discount: number,
  finalPrice: number,
  income: number,
}

export const sOrdersSchema: Schema<SOrders> = new Schema<SOrders, Model<SOrders>>({
  sOrederNum: { type: Number, required: true, unique: true },
  clientNum: { type: String,  required: true, ref: 'clients' },
  soroderStatus { required: true, default: 'New' }
  productsPrice { type: number, required: true, default: 0 }
  discount { type: number, required: true, default: 0 }
  finalPrice { type: number, required: true  }
  income { type: number, required: true, default: 0 }
});

export class SOrdersModel extends RemultModel<SOrders> {
  constructor() {
    super(sOrdersSchema);
  }
}

