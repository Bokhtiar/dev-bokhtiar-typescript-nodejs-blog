import { Models } from "../models";
import { ICategory, ICategoryCreateOrUpdated } from "../types/category.types";

/* find resources by paginate */
export const findAll = async (): Promise<ICategory[] | []> => {
  return await Models.Categories.find(); 
};

// /* Find specific resource by _id */
export const findById = async (id: string): Promise<ICategory | null> => {
  return await Models.Categories.findById(id);
};

// /* Find specific resource by key */
// export const findOneByKey = async (params: any): Promise<IDivision | null> => {
//   return await Models.Division.findOne({ ...params });
// };

/* Create new resource */
export const createCategory = async (
  data: ICategoryCreateOrUpdated
): Promise<ICategory | null> => {
  const newCategory = new Models.Categories({
    category_name: data.category_name
  });

  return await newCategory.save();
};

/* Find specific resource by id and update keys */
export const findOneByIdAndUpdate = async (
  id: string,
  data: ICategoryCreateOrUpdated
): Promise<ICategory | null> => {
  return await Models.Categories.findByIdAndUpdate(id, { $set: { ...data } });
};

/* Find specific resource by id and destroy */
export const findOneByIdAndDestroy = async (
  id: string
): Promise<ICategory | null> => {
  return await Models.Categories.findByIdAndDelete(id);
};

// /**public service for devision */
// export const findAllDivisionByKey = async (): Promise<IDivision[] | []> => {
//   return await Models.Division.find(
//     {},
//     { created_by: 0, createdAt: 0, updatedAt: 0 }
//   );
// };
