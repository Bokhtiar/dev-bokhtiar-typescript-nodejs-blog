import { Router } from "express";
import express, { Express, Request, Response } from "express";
import { categoryRoute } from "./category.route";

export const AppRouter: Router = Router();
AppRouter.use('/category', categoryRoute)
