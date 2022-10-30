import { Types } from "mongoose";

export interface IComment {
  _id: Types.ObjectId;
  post: string;
  comment: string;
}

export interface ICommentCreateOrUpdate {
  post: string;
  comment: string;
}
