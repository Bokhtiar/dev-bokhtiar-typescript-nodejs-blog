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
    const { message } = req.body;
    const documents = {
      message,
    };
    await service.Notification.storeResource(documents);
    res.status(201).json({
      status: true,
      message: "Notification Created Successfully Done.",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

/**show */
export const show = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await service.Notification.findOneKey(id);
    res.status(200).json({
      status: true,
      data: result,
    });
  } catch (error) {
    if (error) {
      console.log(error);
      next(error);
    }
  }
};

/**update */
export const update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { message } = req.body;
    const documents = {
      message,
    };
    await service.Notification.updateResource(id, documents);
    res.status(200).json({
      status: true,
      message: "Notification updated successfully done.",
    });
  } catch (error) {
    if (error) {
      console.log(error);
      next(error);
    }
  }
};

/**destroy */
export const destroy = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {id} = req.params
    await service.Notification.findDestroy(id)
    res.status(200).json({
      status: true,
      message: "Notification deleted successfully done"
    })
  } catch (error) {
    if (error) {
      console.log(error);
      next(error);
    }
  }
};
