import { Types } from "mongoose";

export interface ITodo {
  _id: Types.ObjectId;
  title: string;
  description: string;
}

export interface ITodoCreateOrUpdated {
  title: string;
  description: string;
}
