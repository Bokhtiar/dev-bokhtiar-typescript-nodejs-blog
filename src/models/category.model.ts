import { Schema, model } from "mongoose";
import { ICategory } from "../types/category.types";

const CategorySchema: Schema = new Schema<ICategory>(
  {
    category_name: {
      type: String,
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);

export const Categories = model<ICategory>("categories", CategorySchema);
