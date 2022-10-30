import { INotification, INotificationCreateOrUpdate } from "../types/notification.types";
import { Models } from "../models";

/**list of resource */
export const FindAll = async (): Promise<INotification[] | []> => {
  return Models.Notification.find();
};

/**resource of store */
export const storeResource = async (data:INotificationCreateOrUpdate):Promise<INotification | null> => {
    const newNotification = new Models.Notification({
        message: data.message
    })
    return await newNotification.save();
};
