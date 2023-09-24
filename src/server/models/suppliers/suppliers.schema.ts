import { Schema, Model, Document } from "mongoose";
import { RemultModel } from "remult";
import uniqueValidator from "mongoose-unique-validator";
import { Status, SupType } from './types'

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
  supStatus { , required: true, default: "Potential" },
  supType { , required: true },
  phone { type: String, required: true },
  address { type: String, required: false },
  supOrders: { type: [number], required: false, ref: "sorders" }
});

export supass SuppliersModel extends RemultModel<Suppliers> {
  constructor() {
    super(suppliersSchema);
  }
}

