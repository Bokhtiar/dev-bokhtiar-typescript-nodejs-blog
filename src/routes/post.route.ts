import * as PostController from '../controller/post.controller'
import { Router } from 'express'
import {validaors} from '../validators'

export const PostRouter :Router = Router();
PostRouter.get('/', PostController.index);
PostRouter.get('/:id', PostController.show);
PostRouter.delete('/:id', PostController.destroy)
PostRouter.post('/', validaors.Post.createUpdate, PostController.store )
PostRouter.put('/:id', validaors.Post.createUpdate, PostController.update )