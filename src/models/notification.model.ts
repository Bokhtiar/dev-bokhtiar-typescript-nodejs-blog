import { Schema, model } from "mongoose";
import { INotification } from "../types/notification.types";

const newSchema: Schema = new Schema<INotification>(
  {
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const Notification = model<INotification>("Notification", newSchema);
