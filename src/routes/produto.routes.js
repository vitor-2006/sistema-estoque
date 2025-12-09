import produtoController from "../controllers/produto.controller.js";
import { authMiddleware } from "../middlewares/authentication.js";
import express from 'express'
import { ensureValidId } from "../middlewares/validate.middleware.js";

const produtoRoutes = express.Router()

produtoRoutes.post('/create', authMiddleware(), produtoController.create)
// produtoRoutes.get('/search/:id', authMiddleware(), ensureValidId, produtoController.get)
produtoRoutes.get('/storage', authMiddleware(), produtoController.storage)

export default produtoRoutes