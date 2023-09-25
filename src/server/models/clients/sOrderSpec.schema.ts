import { Schema, Model, Document } from "mongoose";
import { RemultModel } from "remult";
import uniqueValidator from "mongoose-unique-validator";
import { SOrdersStatus, Status } from "./types";

export interface SOrdersSpec extends Document {
  sOrederNum: number;
  lineNum: number;
  productsNum: number;
  quantity: number;
}

export const sOrdersSpecSchema: Schema<SOrdersSpec> = new Schema<
  SOrdersSpec,
  Model<SOrdersSpec>
>({
  sOrederNum: { type: Number, required: true, ref: "sorders" }, //Primary key
  lineNum: { type: Number, required: true }, //Primary key
  productsNum: { type: Number, required: true, ref: "products" },
  quantity: { type: Number, required: true },
});

export class SOrdersSpecModel extends RemultModel<SOrdersSpec> {
  constructor() {
    super(sOrdersSpecSchema);
  }
}
