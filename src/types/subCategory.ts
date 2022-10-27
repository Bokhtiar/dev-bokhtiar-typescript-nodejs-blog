import Types from "mongoose";

export interface ISubCategory {
  _id: Types.ObjectId;
  category: Types.ObjectId;
  subCategory_name: string;
}

export interface ISubCategoryCreateOrUpdate {
  category: string;
  subCategory_name: string;
}
