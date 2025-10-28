import express from 'express'
import { Register } from './register.js';
import { Login } from './login.js';
const userRoutes = express.Router();

userRoutes.post('/Register', Register);
userRoutes.post('/Login', Login)

export{ userRoutes }