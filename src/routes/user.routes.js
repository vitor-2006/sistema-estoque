import  userController  from '../controllers/user.controller.js';
import { ensureValidId } from '../middlewares/validate.middleware.js';
import { authMiddleware, requireRole } from '../middlewares/authentication.js';
import express from 'express'

const userRouter = express.Router();

userRouter.post('/register', userController.create);
userRouter.post('/login', userController.login);
userRouter.get('/users', authMiddleware(), requireRole("ADMIN"), ensureValidId, userController.list);
userRouter.get('/users/:id', authMiddleware(), requireRole("ADMIN"), ensureValidId, userController.get);
userRouter.put('/edit/', authMiddleware(), ensureValidId, userController.update);
userRouter.delete('/delete/', authMiddleware(), ensureValidId, userController.remove);

export default userRouter;