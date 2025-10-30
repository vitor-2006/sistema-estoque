import express from 'express'
import { createProduto } from './postProduto.js'
import { entradaMov } from './entrada.js'
import { saidaMov } from './saida.js'
import { historico } from './historico.js'
import { authMiddleware, Role } from '../middleware/authentication.js'

const routesProduto = express.Router()

routesProduto.post('/produto', authMiddleware(Role.ADMIN), async (req, res) => {
    const { nome, quantidade } = req.body
    const newProduto = await createProduto(nome, quantidade)
    if(newProduto) {
        return res.status(201).send({ message: 'produto criado com sucesso', produto: newProduto })
    } else {
        return res.status(400).send({ message: 'erro ao registrar produto' })
    }
})

routesProduto.post('/produto/:id/entrada',authMiddleware(Role.ADMIN), async (req, res) => {
    const { id } = req.params
    const { quantidade } = req.body
    const newEntrada = await entradaMov(id, quantidade)
    if(!newEntrada) {
        return res.status(400).send({ message: 'produto não encontrado ou quantidade inválida' })
    } else {
        return res.status(200).send({ message: 'entrada registrada com sucesso', movimento: newEntrada })
    }
})

routesProduto.post('/produto/:id/saida', authMiddleware(Role.ADMIN), async (req, res) => {
    const { id } = req.params
    const { quantidade } = req.body
    const newEntrada = await saidaMov(id, quantidade)
    if(!newEntrada) {
        return res.status(400).send({ message: 'produto não encontrado ou quantidade inválida' })
    } else {
        return res.status(200).send({ message: 'saída registrada com sucesso', movimento: newEntrada })
    }
})

routesProduto.get("/produto/:id/historico", authMiddleware(Role.ADMIN), async (req, res) => {
    const { id } = req.params
    const hist = await historico(id)
    if(!hist) {
        return res.status(400).send({ message: 'produto não encontrado' })
    } else {
        return res.status(200).send(hist) 
    }
})

export { routesProduto }