import { Router } from "express";
import { validaors } from "../validators";
import * as CommnetController from '../controller/comment.controller'

export const commentRoute:Router = Router();
commentRoute.get('/', CommnetController.index)