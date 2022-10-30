import { Request, Response, NextFunction } from "express";
import { service } from "../services";

/**list of resource */
export const index = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const results = await service.Notification.FindAll();
  res.status(200).json({
    status: true,
    data: results
  });
};
