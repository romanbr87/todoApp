import { Schema, Model, Document } from "mongoose";
import { RemultModel } from "remult";
import uniqueValidator from "mongoose-unique-validator";

export interface Products extends Document {
  productNum: number;
  name: string;
  price: number;
  stock: number;
  avgCost: number;
  isAtomic: boolean;
  categories: {
    [key: string]: string[];
  };
}

export const productsSchema: Schema<Products> = new Schema<
  Products,
  Model<Products>
>({
  productNum: { type: number, required: true, unique: true },
  name: { type: string, required: true },
  price: { type: number, required: true, default: 0 },
  stock: { type: number, required: true, default: 0 },
  avgCost: { type: number, required: true, default: 0 },
  isAtomic: { type: Boolean, required: true, default: true },
  categoreist: { type: {}, required: true },
});

export class ProductsModel extends RemultModel<Products> {
  constructor() {
    super(productsSchema);
  }
}
