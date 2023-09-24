import { Schema, Model, Document } from "mongoose";
import { RemultModel } from "remult";
import uniqueValidator from "mongoose-unique-validator";
import { SOrdersStatus, Status } from './types'

export interface SOrders extends Document {
  sOrederNum: number;
  clientNum: string,
  sOrders: SOrdersStatus,
  SOroderStatus: Status,
  productsPrice: number,
  discount: number,
  finalPrice: number,
  income: number,
}

export const sOrdersSchema: Schema<SOrders> = new Schema<SOrders, Model<SOrders>>({
  sOrederNum: { type: number, required: true, unique: true },
  clientNum: { type: string,  required: true, ref: 'clients' },
  sOrders { required: true }
  SOroderStatus { required: true, default: 'New' }
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

