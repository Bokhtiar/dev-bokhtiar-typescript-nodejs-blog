import { Router } from "express";
import * as SubCategoryController from "../controller/subCategory.controller"

export const SubCategoryRouter:Router = Router()
SubCategoryRouter.get('/', SubCategoryController.index)
