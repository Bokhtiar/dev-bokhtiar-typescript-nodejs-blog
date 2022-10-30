import { Router } from "express";
export const NotificationRouter: Router = Router();
import * as NotificationController from '../controller/notification.controller'

NotificationRouter.get('/',NotificationController.index)
NotificationRouter.post('/',)
