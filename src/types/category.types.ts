import { Types } from "mongoose";
export interface ICategory {
  _id: Types.ObjectId;
  category_name: string;
}

export interface ICategoryCreateOrUpdated {
  category_name: string;
}
