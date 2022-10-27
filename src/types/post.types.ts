import { Types } from "mongoose";

export interface IPost {
  _id: Types.ObjectId;
  title: string;
  image: string;
  category: string;
  subCategory: string;
  description: string;
}

export interface IPostCreateOrUpdated {
  title: string;
  image: string;
  category: string;
  subCategory: string;
  description: string;
}
