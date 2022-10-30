import { Types } from "mongoose";

export interface INotification {
  _id: Types.ObjectId;
  message: string
}

export interface INotificationCreateOrUpdate {
    message : string
}
