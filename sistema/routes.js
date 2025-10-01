import express from 'express'
import { createProduto } from './postProduto'

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

export { routesProduto }