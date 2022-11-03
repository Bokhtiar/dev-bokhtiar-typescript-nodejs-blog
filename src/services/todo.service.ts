import { ITodo, ITodoCreateOrUpdated } from "../types/todo.types";
import { Models } from "../models";

/**list of resource */
export const FindAll = async (): Promise<ITodo[] | []> => {
  return await Models.Todo.find();
};

/**store of resource */
export const store = async (
  data: ITodoCreateOrUpdated
): Promise<ITodo | null> => {
  const storeResource = new Models.Todo({
    title: data.title,
    description: data.description,
  });
  return await storeResource.save();
};

/**single reosurce */
export const FindOneId = async (id: string): Promise<ITodo | null> => {
  return await Models.Todo.findById(id);
};

/**update resource */
export const findByUpdate = async (
  id: string,
  data: ITodoCreateOrUpdated
): Promise<ITodo | null> => {
  return await Models.Todo.findByIdAndUpdate(id, { $set: { ...data } });
};

/**destory resource*/
export const FindByDelete = async (id: string): Promise<ITodo | null> => {
  return await Models.Todo.findByIdAndRemove(id);
};
