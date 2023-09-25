import { Schema, Model, Document, model } from "mongoose";
import {
  Status,
  StatusEnum,
  ClientType,
  ClientTypeEnum,
} from "../../../shared/types";

export interface Clients extends Document {
  clNum: string;
  clId: string;
  clName: string;
  clStatus: Status;
  clType: ClientType;
  phone: string;
  address: string;
  clOrders: number[];
}

export const clientsSchema: Schema<Clients, Model<Clients>> = new Schema<
  Clients,
  Model<Clients>
>({
  clNum: { type: String, required: true, unique: true },
  clId: { type: String, required: false },
  clStatus: {
    type: String,
    enum: StatusEnum,
    required: true,
    default: StatusEnum.Potential,
  },
  clType: { type: String, enum: ClientTypeEnum, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: false },
  clOrders: { type: [Number], required: false, ref: "sorders" },
});

export const ClientsModel: Model<Clients> = model<Clients>(
  "Clients",
  clientsSchema,
);
