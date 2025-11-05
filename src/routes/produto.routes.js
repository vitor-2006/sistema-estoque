import produtoController from "../controllers/produto.controller.js";
import { authMiddleware, requireRole } from "../middlewares/authentication.js";
import express from 'express'

const produtoRoutes = express.Router()

produtoRoutes.post('/produto', authMiddleware(), requireRole(), produtoController.create)

export default produtoRoutes