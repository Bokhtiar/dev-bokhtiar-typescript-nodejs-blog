import { Router } from "express";
import * as TodoController from '../controller/todo.controller'

export const TodoRouter:Router = Router()

TodoRouter.get('/', TodoController.index)


