import { Router } from "express";
export const NotificationRouter: Router = Router();
import * as NotificationController from '../controller/notification.controller'
import {validaors} from '../validators'

NotificationRouter.get('/',NotificationController.index)
NotificationRouter.get('/:id', NotificationController.show)
NotificationRouter.delete('/:id', NotificationController.destroy)
NotificationRouter.post('/', validaors.Notification.createUpdate, NotificationController.store)
NotificationRouter.put('/:id', validaors.Notification.createUpdate, NotificationController.update)
