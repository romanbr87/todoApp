import { Schema, Model, Document, model } from "mongoose";
import {ProductCat} from "../types"

export interface Products extends Document {
  productNum: number;
  name: string;
  price: number;
  stock: number;
  avgCost: number;
  isAtomic: boolean;
  categories: ProductCat
}

export const productsSchema: Schema<Products> = new Schema<
  Products,
  Model<Products>
>({
  productNum: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: Number, required: true, default: 0 },
  stock: { type: Number, required: true, default: 0 },
  avgCost: { type: Number, required: true, default: 0 },
  isAtomic: { type: Boolean, required: true, default: true },
  //categories: { type: Map, of: [String], required: true },
  categories: { type: Object, required: true }, // Changed "categoreist" to "categories" and set type to "Object"

});

export const ProductsModel: Model<Products> = model<Products>(
  "Products",
  productsSchema,
);
