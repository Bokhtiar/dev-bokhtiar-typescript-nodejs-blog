import { Router } from "express";
import express, { Express, Request, Response } from "express";
import { categoryRoute } from "./category.route";
import { SubCategoryRouter } from "./subCategory.route";
import { PostRouter } from "./post.route";
import { commentRoute } from "./comment.route";
import { NotificationRouter } from "./notification.route";
import { TodoRouter } from "./todo.route";

export const AppRouter: Router = Router();
AppRouter.use("/category", categoryRoute);
AppRouter.use("/sub-category", SubCategoryRouter);
AppRouter.use("/post", PostRouter);
AppRouter.use("/comment", commentRoute)
AppRouter.use("/notification", NotificationRouter)
AppRouter.use("/todo", TodoRouter)
