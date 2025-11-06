import movimentoController from "../controllers/movimento.controller.js";
import { authMiddleware } from "../middlewares/authentication.js";
import express from 'express'

const movimentoRoutes = express.Router()

movimentoRoutes.post('/entrada', authMiddleware(), movimentoController.entrada)
movimentoRoutes.post('/saida', authMiddleware(), movimentoController.saida)
movimentoRoutes.get('/historico/:idProduto', authMiddleware(), movimentoController.historico)

export default movimentoRoutes