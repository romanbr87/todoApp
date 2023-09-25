import { Schema, Model, Document, } from "mongoose";
import { StatusEnum, SupTypeEnum } from "../../../shared/types";
import { Status, SupType } from "../../../shared/types";

export interface Suppliers extends Document {
  supNum: string,
  supId: string,
  supName: string,
  supStatus: Status,
  supType: SupType,
  phone: string,
  address: string,
  supOrders: number[], 
}

export const suppliersSchema: Schema<Suppliers> = new Schema<Suppliers, Model<Suppliers>>({
  supNum: { type: String, required: true, unique: true },
  supId: { type: String,  required: false },
  supStatus: {    type: String,
    enum: StatusEnum,
    required: true,
    default: StatusEnum.Potential,
 },
  supType: { type: String, enum: SupTypeEnum, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: false },
  supOrders: { type: [Number], required: false, ref: "porders" }
});

export const SuppliersModelModel: Model<Suppliers> = mongoose.model<Suppliers>(
  "Suppliers",
  suppliersSchema,
);

