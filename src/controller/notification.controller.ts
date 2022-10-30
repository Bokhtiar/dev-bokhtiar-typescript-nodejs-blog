import { Request, Response, NextFunction } from "express";
import { service } from "../services";

/**list of resource */
export const index = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const results = await service.Notification.FindAll();
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
    const {message} = req.body
    const documents = {
      message
    }
    await service.Notification.storeResource(documents);
    res.status(201).json({
      status: true,
      message: "Notification Created Successfully Done."
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
};
