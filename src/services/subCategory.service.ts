import { SUbCategories } from "../models/subCategory.model";
import { ISubCategory, ISubCategoryCreateOrUpdate } from "../types/subCategory";

/**find all resource */
export const FindallSubCategory = async (): Promise<ISubCategory[] | []> => {
  return await SUbCategories.find();
};
