import { INotification } from "../types/notification.types";
import { Models } from "../models";

/**list of resource */
export const FindAll = async (): Promise<INotification[] | []> => {
  return Models.Notification.find();
};
