import express from 'express'
import { createProduto } from './postProduto.js'
import { entradaMov } from './entrada.js'
import { saidaMov } from './saida.js'

const routesProduto = express.Router()

routesProduto.post('/produto', async (req, res) => {
    const { nome, quantidade } = req.body
    const newProduto = await createProduto(nome, quantidade)
    if(newProduto) {
        return res.status(201).send({ message: 'produto criado com sucesso', produto: newProduto })
    } else {
        return res.status(400).send({ message: 'erro ao registrar produto' })
    }
})

routesProduto.post('/produto/:id/entrada', async (req, res) => {
    const { id } = req.params
    const { quantidade } = req.body
    const newEntrada = await entradaMov(id, quantidade)
    if(!newEntrada) {
        return res.status(400).send({ message: 'produto não encontrado ou quantidade inválida' })
    } else {
        return res.status(200).send({ message: 'entrada registrada com sucesso', movimento: newEntrada })
    }
})

routesProduto.post('/produto/:id/saida', async (req, res) => {
    const { id } = req.params
    const { quantidade } = req.body
    const newEntrada = await saidaMov(id, quantidade)
    if(!newEntrada) {
        return res.status(400).send({ message: 'produto não encontrado ou quantidade inválida' })
    } else {
        return res.status(200).send({ message: 'saída registrada com sucesso', movimento: newEntrada })
    }
})

export { routesProduto }