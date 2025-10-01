import { Produto } from "./schemaProduto.js"

export const createProduto = async (nome, quantidade) => {
    try {
        const newProduto = new Produto({nome, quantidade})
        return await newProduto.save()
    } catch (error) {
        console.error('Erro ao criar Produto', error.message)
        throw error
    }
}