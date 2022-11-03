import { service } from "../services";
import { Request, Response, NextFunction } from "express";
import { nextTick } from "process";

/**list of resource */
export const index = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const results = await service.Todo.FindAll();
    return res.status(200).json({
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

/**store of documents */
export const store = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, description } = req.body;
    const documents = {
      title,
      description,
    };
    await service.Todo.store(documents);

    return res.status(201).json({
      status: true,
      message: "Created Successfully Done",
    });
  } catch (error) {
    if (error) {
      console.log(error);
      next(error);
    }
  }
};

/**single resource */
export const show = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const {id} = req.params
        const result = await service.Todo.FindOneId(id)
        return res.status(200).json({
            status:true,
            data: result
        })
    } catch (error) {
        if(error){
            console.log(error)
            next(error)
        }
    }
}

/**resource update */
export const update = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const {id} = req.params
        const {title, description} = req.body
        const documents = {
            title, description
        }
        await service.Todo.findByUpdate(id, documents);

        return res.status(201).json({
            status: true,
            message: "Todo Updated Successfully"
        })
    } catch (error) {
        if(error){
            console.log(error)
            next(error)
        }
    }
}

/**destory */
export const destroy = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const {id} = req.params
        await service.Todo.FindByDelete(id)
        res.status(200).json({
            status:true,
            message: "Todo Deleted Successfully Done"
        })
    } catch (error) {
        if(error){
            console.log(error)
            next(error)
        }
    }
}