import { Request, Response, NextFunction } from "express";

/**list of resource */
export const index = async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
        status:true,
        message: 'ok'
    })
};
