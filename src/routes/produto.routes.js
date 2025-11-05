import produtoController from "../controllers/produto.controller.js";
import { authMiddleware } from "../middlewares/authentication.js";
import express from 'express'

const produtoRoutes = express.Router()

produtoRoutes.post('/criar', authMiddleware(), produtoController.create)

export default produtoRoutes