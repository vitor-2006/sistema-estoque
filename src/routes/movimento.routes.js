import movimentoController from "../controllers/movimento.controller.js";
import { authMiddleware, requireRole } from "../middlewares/authentication.js";
import { ensureValidId } from '../middlewares/validate.middleware.js';
import express from 'express'

const movimentoRoutes = express.Router()

movimentoRoutes.post('/entrada/:id', authMiddleware(), requireRole(), ensureValidId, movimentoController.entrada)
movimentoRoutes.post('/saida/:id', authMiddleware(), requireRole(), ensureValidId, movimentoController.saida)
movimentoRoutes.get('/historico/:id', authMiddleware(), requireRole(), ensureValidId, movimentoController.historico)

export default movimentoRoutes