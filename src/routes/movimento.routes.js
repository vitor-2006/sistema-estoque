import movimentoController from "../controllers/movimento.controller.js";
import { authMiddleware, requireRole } from "../middlewares/authentication.js";
import { ensureValidId } from '../middlewares/validate.middleware.js';
import express from 'express'

const movimentoRoutes = express.Router()

movimentoRoutes.post('/entrada', authMiddleware(), movimentoController.entrada)
movimentoRoutes.post('/saida', authMiddleware(), movimentoController.saida)
movimentoRoutes.get('/historico/:id', authMiddleware(), ensureValidId, movimentoController.historico)

export default movimentoRoutes