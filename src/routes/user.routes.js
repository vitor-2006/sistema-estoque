import  userController  from '../controllers/user.controller.js';
import { ensureValidId } from '../middlewares/validate.middleware.js';
import { authMiddleware, requireRole } from '../middlewares/authentication.js';
import express from 'express'

const userRouter = express.Router();

userRouter.post('/register', userController.create);
userRouter.post('/login', userController.login);
userRouter.get('/users', userController.list);
userRouter.get('/users/:id', authMiddleware(), requireRole("ADMIN"), ensureValidId, userController.get);
userRouter.put('/users/:id', authMiddleware(), requireRole(), ensureValidId, userController.update);
userRouter.delete('/users/:id', authMiddleware(), requireRole(), ensureValidId, userController.remove);

export default userRouter;

// import express from 'express'
// import { Register } from '../user/register.js';
// import { Login } from '../user/login.js';
// const userRoutes = express.userRouter();

// userRoutes.post('/Register', Register);
// userRoutes.post('/Login', Login)

// export{ userRoutes }