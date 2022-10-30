import { Types } from "mongoose";

export interface IComment {
  _id: Types.ObjectId;
  post: Types.ObjectId;
  comment: string;
}

export interface ICommentCreateOrUpdate {
  post: Types.ObjectId;
  comment: string;
}
