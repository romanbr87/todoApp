import { Schema, Model, Document, model } from "mongoose";

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

export const SOrdersSpecModel: Model<SOrdersSpec> = model<SOrdersSpec>(
  "SOrdersSpec",
  sOrdersSpecSchema,
);
