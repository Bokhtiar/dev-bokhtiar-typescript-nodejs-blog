import { Schema, model } from "mongoose";
import { ISubCategory, ISubCategoryCreateOrUpdate } from "../types/subCategory";
const subCategorySchema: Schema = new Schema<ISubCategory>({
  subCategory_name: {
    type: String,
    trim: true,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Categories",
    required: true,
  }
},{
    timestamps:true
});

export const SUbCategories = model<ISubCategory>('SubCategory', subCategorySchema)