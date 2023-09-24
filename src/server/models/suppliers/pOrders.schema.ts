import { Schema, Model, Document } from "mongoose";
import { RemultModel } from "remult";
import uniqueValidator from "mongoose-unique-validator";
import { OrderStatus, Status } from './types'

export interface POrders extends Document {
  pOrederNum: number;
  supNum: string,
  pOroderStatus: OrderStatus,
  purchesesPrice: number,
  discount: number,
  finalPrice: number,
  outCome: number,
}

export const pOrdersSchema: Schema<POrders> = new Schema<POrders, Model<POrders>>({
  pOrederNum: { type: number, required: true, unique: true },
  supNum: { type: string,  required: true, ref: 'suppliers' },
  pOroderStatus { required: true, default: 'New' }
  purchesesPrice { type: number, required: true, default: 0 }
  discount { type: number, required: true, default: 0 }
  finalPrice { type: number, required: true  }
  outCome { type: number, required: true, default: 0 }
});

export class POrdersModel extends RemultModel<POrders> {
  constructor() {
    super(pOrdersSchema);
  }
}

