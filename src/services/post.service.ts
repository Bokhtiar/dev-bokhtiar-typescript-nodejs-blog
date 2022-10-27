import { Models } from "../models";
import { IPost, IPostCreateOrUpdated } from "../types/post.types";

/**list of resource */
export const FindAll = async (): Promise<IPost[] | []> => {
  return await Models.Posts.find().populate('category', "category_name").populate('subCategory', "subCategory_name");
};

/**store of resource */
export const StoreResource = async (
  data: IPostCreateOrUpdated
): Promise<IPost | null> => {
  const newPost = new Models.Posts({
    category: data.category,
    subCategory: data.subCategory,
    image: data.image,
    title: data.title,
    description: data.description,
  });
  return newPost.save();
};

/**single resource */
export const FindById = async (id: string): Promise<IPost | null> => {
  return await Models.Posts.findById(id).populate("category", "category_name").populate("subCategory", "subCategory_name");
};

/**update resource */
export const findByIdAndUpdate = async (
  id: string,
  data: IPostCreateOrUpdated
): Promise<IPost | null> => {
    return await Models.Posts.findByIdAndUpdate(id, {$set: {...data}})
};

/**destroy resource */
export const findByIdAndDelete = async(id:string) : Promise<IPost | null> => {
    return await Models.Posts.findByIdAndDelete(id)
}