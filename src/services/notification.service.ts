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

/**single resource show */
export const findOneKey = async(id:string):Promise<INotification | null> => {
    return await Models.Notification.findById(id)
}

/**update resource */
export const updateResource = async(id:string, data:INotificationCreateOrUpdate): Promise<INotification | null> => {
    return await Models.Notification.findByIdAndUpdate(id, {$set: {...data}})
}

/**destroy resource */
export const findDestroy = async(id:string):Promise<INotification | null> => {
    return await Models.Notification.findByIdAndDelete(id)
}