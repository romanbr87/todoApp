import { Schema, Model, Document, } from "mongoose";
import { OrderStatus, OrderStatusEnum } from "../../../shared/types";

export interface SOrders extends Document {
  sOrederNum: number;
  clientNum: string;
  soroderStatus: OrderStatus;
  productsPrice: number;
  discount: number;
  finalPrice: number;
  income: number;
}

export const sOrdersSchema: Schema<SOrders> = new Schema<
  SOrders,
  Model<SOrders>
>({
  sOrederNum: { type: Number, required: true, unique: true },
  clientNum: { type: String, required: true, ref: "clients" },
  soroderStatus: {
    type: String,
    enum: OrderStatusEnum,
    required: true,
    default: "New",
  },
  productsPrice: { type: Number, required: true, default: 0 },
  discount: { type: Number, required: true, default: 0 },
  finalPrice: { type: Number, required: true },
  income: { type: Number, required: true, default: 0 },
});

export const SOrdersModel: Model<SOrders> = mongoose.model<SOrders>(
  "Sorders",
  sOrdersSchema,
);
