import { Response, Request, NextFunction } from "express";
import { service } from "../services";

/**list of resource */
export const index = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const results = await service.SubCategory.FindallSubCategory();
    res.status(200).json({
      status: true,
      data: results,
    });
  } catch (error) {
    if (error) {
      next(error);
    }
  }
};

/**resource store */
export const store = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { subCategory_name, category } = req.body;
    const documents = {
      category,
      subCategory_name,
    };
    await service.SubCategory.storeResource(documents);
    res.status(201).json({
        status:true,
        message: "Sub category successfully created"
    })
  } catch (error) {
    if (error) {
      console.log(error);
      next(error);
    }
  }
};
