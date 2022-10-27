import { Models } from "../models";
import { ISubCategory, ISubCategoryCreateOrUpdate } from "../types/subCategory";

/**find all resource */
export const FindallSubCategory = async (): Promise<ISubCategory[] | []> => {
  return await Models.SUbCategories.find().populate(
    "category",
    "category_name"
  );
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

/**single resource show */
export const FindById = async (id: string): Promise<ISubCategory | null> => {
  return await Models.SUbCategories.findById(id).populate("category", "category_name");
};

/* Find specific resource by id and update keys */
export const findOneByIdAndUpdate = async (
  id: string,
  data: ISubCategoryCreateOrUpdate
): Promise<ISubCategory | null> => {
  return await Models.SUbCategories.findByIdAndUpdate(id, { $set: { ...data } });
};

/**find by id destroy */
export const FindByIdDelete = async(id:string): Promise<ISubCategory | null> => {
  return await Models.SUbCategories.findByIdAndDelete(id)
}