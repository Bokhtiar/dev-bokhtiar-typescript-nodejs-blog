import { Router } from "express";
import * as CategoryController from "../controller/category.controller";
import {validaors} from "../validators"


export const categoryRoute: Router = Router();
categoryRoute.get("/", CategoryController.index);
categoryRoute.post("/", validaors.Category.createUpdate, CategoryController.store);
categoryRoute.get("/:id", CategoryController.show)
