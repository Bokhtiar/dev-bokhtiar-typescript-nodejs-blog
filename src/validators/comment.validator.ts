import Schema from "async-validator";
import { NextFunction, Request, Response } from "express";

/* Resource create & update validaor */
export const createUpdate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const descriptor = <any>{
    post: {
      type: "string",
      required: true,
      message: "Post ID is required.",
    },
    commnet: {
        type:"string",
        required: true,
        message: "Comment is required"
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
