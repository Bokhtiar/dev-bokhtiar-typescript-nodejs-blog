import { Router } from "express";
import * as SubCategoryController from "../controller/subCategory.controller";
import {validaors} from '../validators'

export const SubCategoryRouter: Router = Router();
SubCategoryRouter.get("/", SubCategoryController.index);
SubCategoryRouter.post("/", validaors.SubCategory.createUpdate, SubCategoryController.store);
SubCategoryRouter.get("/:id", SubCategoryController.show);
SubCategoryRouter.put("/:id", validaors.SubCategory.createUpdate, SubCategoryController.update);
SubCategoryRouter.delete("/:id", SubCategoryController.destroy);