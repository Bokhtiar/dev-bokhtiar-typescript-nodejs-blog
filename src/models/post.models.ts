import { Schema, model } from "mongoose";
import { IPost, IPostCreateOrUpdated } from "../types/post.types";

const postSchema: Schema = new Schema<IPost>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    subCategory: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const Posts = model<IPost>("Posts", postSchema);