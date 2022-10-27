import { Response, Request, NextFunction } from "express";
import {service} from '../services'

/**list of resource */
export const index = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    try {
        const results = await service.SubCategory.FindallSubCategory()
        res.status(200).json({
            status:true,
            data: results
        })
    } catch (error) {
        if(error){
            next(error)
        }
    }
};

/**resource store */
