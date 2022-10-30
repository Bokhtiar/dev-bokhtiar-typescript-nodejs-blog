import { Router } from "express";
export const NotificationRouter: Router = Router();
import * as NotificationController from '../controller/notification.controller'
import {validaors} from '../validators'

NotificationRouter.get('/',NotificationController.index)
NotificationRouter.post('/', validaors.Notification.createUpdate, NotificationController.store)
