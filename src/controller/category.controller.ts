import { NextFunction } from "express";
import express, { Express, Request, Response } from "express";
import { service } from "../services";

/* List of resources */
export const index = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const results = await service.Category.findAll();
    res.status(200).json({
      status: true,
      data: results,
    });
  } catch (error: any) {
    if (error) {
      console.log(error);
      next(error);
    }
  }
};

/*resource store */
export const store = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { category_name } = req.body;
    const documets = {
      category_name,
    };

    await service.Category.createCategory(documets);
    res.status(200).json({
      status: true,
      message: "Created successfully done",
    });
  } catch (error) {
    if (error) {
      console.log(error);
      next(error);
    }
  }
};

/**single resource show  */
export const show = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const resutl = await service.Category.findById(id);
    res.status(201).json({
      status: true,
      data: resutl,
    });
  } catch (error) {
    if (error) {
      console.log(error);
      next(error);
    }
  }
};

