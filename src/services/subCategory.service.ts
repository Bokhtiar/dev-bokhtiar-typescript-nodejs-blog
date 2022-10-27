import { Models } from "../models";
import { ISubCategory, ISubCategoryCreateOrUpdate } from "../types/subCategory";

/**find all resource */
export const FindallSubCategory = async (): Promise<ISubCategory[] | []> => {
  return await Models.SUbCategories.find().populate("category", "category_name")
};

/**store of resource */
export const storeResource = async (
  data: ISubCategoryCreateOrUpdate
): Promise<ISubCategory | null> => {
  const newSubCategory = new Models.SUbCategories({
    subCategory_name: data.subCategory_name,
    category: data.category,
  });

  return await newSubCategory.save();
};
