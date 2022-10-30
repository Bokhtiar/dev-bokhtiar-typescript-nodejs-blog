import {Request, Response, NextFunction} from 'express'

export const index = async(req:Request, res:Response, next: NextFunction) => {
    res.status(200).json({
        status: true,
        message: "Comment list"
    })
}   