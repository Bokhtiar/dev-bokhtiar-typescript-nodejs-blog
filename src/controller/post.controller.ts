import { Request, Response, NextFunction } from "express";
import { service } from "../services";

/**list of resource */
export const index = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const results = await service.Post.FindAll();
    res.status(200).json({
      status: true,
      data: results,
    });
  } catch (error) {
    if (error) {
      console.log(error);
      next(error);
    }
  }
};

/**store of resource */
export const store = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { image, category, subCategory, title, description } = req.body;

    const documents = {
      category,
      subCategory,
      image,
      title,
      description,
    };
    await service.Post.StoreResource(documents);
    res.status(201).json({
      status: true,
      message: "Post create successfully done",
    });
  } catch (error) {
    if (error) {
      console.log(error);
      next(error);
    }
  }
};

/**single resource show */
export const show = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    try {
        const {id} = req.params
        const result = await service.Post.FindById(id)
        res.status(200).json({
            status : true,
            data: result
        })
    } catch (error) {
        if(error){
            console.log(error)
            next(error)
        }
    }
};


