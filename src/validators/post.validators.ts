import Schema from "async-validator";
import { NextFunction, Request, Response } from "express";

/* Resource create & update validaor */
export const createUpdate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const descriptor = <any>{
    title: {
      type: "string",
      required: true,
      message: "Title is required.",
    },
    category: {
      type: "string",
      required: true,
      message: "Category is required",
    },
    subCategory: {
      type: "string",
      required: true,
      message: "Sub Category is required",
    },
    description: {
        type: "string",
        required: true,
        message: "Description is required"
    }
  };

  /* Execute the validator */
  const validator = new Schema(descriptor);

  validator.validate({ ...req.body }, (errors: any) => {
    if (errors) {
      return res.status(422).json({
        status: false,
        errors,
      });
    }
    next();
  });
};
