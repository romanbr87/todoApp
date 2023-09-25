import { Schema, Model, Document } from "mongoose";
import { RemultModel } from "remult";
import uniqueValidator from "mongoose-unique-validator";

export interface Purcheses extends Document {
  purcheseNum: number;
  name: string;
  price: number;
  isAtomic: boolean;
  categories: {
    [key: string]: string[];
  };
}

export const purchesesSchema: Schema<Purcheses> = new Schema<
  Purcheses,
  Model<Purcheses>
>({
  purcheseNum: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: Number, required: true, default: 0 },
  isAtomic: { type: Boolean, required: true, default: true },
  categoreist: { type: {}, required: true },
});

export class PurchesesModel extends RemultModel<Purcheses> {
  constructor() {
    super(purchesesSchema);
  }
}
