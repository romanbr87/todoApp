import { Schema, Model, Document } from "mongoose";
import { RemultModel } from "remult";
import uniqueValidator from "mongoose-unique-validator";
import { Status, Type } from './types'

export interface Clients extends Document {
  clNum: string,
  clId: string,
  clName: string,
  clStatus: Status,
  clType: Type,
  phone: string,
  address: string,
  clOrders: number[], 
}

export const clientsSchema: Schema<Category> = new Schema<Clients, Model<Clients>>({
  clNum: { type: String, required: true, unique: true },
  clId: { type: String,  required: false },
  clStatus { , required: true, default: "Potential" },
  clType { , required: true },
  phone { type: String, required: true },
  address { type: String, required: false },
  clOrders: { type: [number], required: false, ref: "sorders" }
});

export class ClientsModel extends RemultModel<Clients> {
  constructor() {
    super(clientsSchema);
  }
}

