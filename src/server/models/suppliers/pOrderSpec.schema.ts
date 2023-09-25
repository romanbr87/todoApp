import { Schema, Model, Document } from "mongoose";
import { RemultModel } from "remult";
import uniqueValidator from "mongoose-unique-validator";
import { SOrdersStatus, Status } from "./types";

export interface POrdersSpec extends Document {
  pOrederNum: number;
  lineNum: number;
  productsNum: number;
  quantity: number;
}

export const pOrdersSpecSchema: Schema<POrdersSpec> = new Schema<
  POrdersSpec,
  Model<POrdersSpec>
>({
  pOrederNum: { type: Number, required: true, ref: "porders" }, //Primary key
  lineNum: { type: Number, required: true }, //Primary key
  purcheseNum: { type: Number, required: true, ref: "purcheses" },
  quantity: { type: Number, required: true },
});

export class POrdersSpecModel extends RemultModel<POrdersSpec> {
  constructor() {
    super(pOrdersSpecSchema);
  }
}
