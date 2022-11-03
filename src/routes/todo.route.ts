import { Router } from "express";
import {validaors} from '../validators'
import * as TodoController from '../controller/todo.controller'

export const TodoRouter:Router = Router()

TodoRouter.get('/', TodoController.index)
TodoRouter.get('/:id', TodoController.show)
TodoRouter.delete('/:id', TodoController.destroy)
TodoRouter.post('/', validaors.Todo.createUpdate, TodoController.store)
TodoRouter.put('/:id', validaors.Todo.createUpdate, TodoController.update)


