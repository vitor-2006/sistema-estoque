import  userController  from '../controllers/user.controller.js';
import { ensureValidId } from '../middlewares/validate.middleware.js';
import { authMiddleware, requireRole } from '../middlewares/authentication.js';
import express from 'express'

const userRouter = express.Router();

userRouter.post('/register', userController.create);
userRouter.post('/login', userController.login);
userRouter.get('/users', authMiddleware(), requireRole("ADMIN"), userController.list);
userRouter.get('/user/', authMiddleware(), userController.get);
userRouter.put('/edit/', authMiddleware(), userController.update);
userRouter.delete('/delete/', authMiddleware(), userController.remove);

export default userRouter;