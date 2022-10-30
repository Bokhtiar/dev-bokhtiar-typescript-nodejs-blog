import { Models } from "../models";
import { IComment, ICommentCreateOrUpdate } from "../types/comment.types";

/* find resources by paginate */
export const findAll = async (): Promise<IComment[] | []> => {
  return await Models.Comment.find(); 
};

// /* Find specific resource by _id */
export const findById = async (id: string): Promise<IComment | null> => {
  return await Models.Comment.findById(id);
};

// /* Find specific resource by key */
// export const findOneByKey = async (params: any): Promise<IDivision | null> => {
//   return await Models.Division.findOne({ ...params });
// };

/* Create new resource */
export const createCategory = async (
  data: ICommentCreateOrUpdate
): Promise<IComment | null> => {
  const newCategory = new Models.Comment({
    comment: data.comment,
    post: data.post
  });

  return await newCategory.save();
};

/* Find specific resource by id and update keys */
export const findOneByIdAndUpdate = async (
  id: string,
  data: ICommentCreateOrUpdate
): Promise<IComment | null> => {
  return await Models.Comment.findByIdAndUpdate(id, { $set: { ...data } });
};

/* Find specific resource by id and destroy */
export const findOneByIdAndDestroy = async (
  id: string
): Promise<IComment | null> => {
  return await Models.Comment.findByIdAndDelete(id);
};
