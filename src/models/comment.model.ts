import { Schema, model, Types } from "mongoose";
import { IComment, ICommentCreateOrUpdate } from "../types/comment.types";
const CommentSchema: Schema = new Schema<IComment>({
  post: {
    type: String,
    required: true,
    ref: "categories",
    trim: true,
  },
  comment: {
    type:String,
    required: true
  }
},{
    timestamps:true
});
export const Comment = model<IComment>('Comment', CommentSchema) 
