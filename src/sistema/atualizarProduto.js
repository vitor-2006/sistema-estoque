import { Produto } from "./schemaProduto.js";

export const SomaProduto = async(id, quantidade) => {
    try {
        const produto = await Produto.findById(id).exec()
        const soma = parseInt(produto.quantidade) + parseInt(quantidade)
        const updatedProduto = await Produto.findByIdAndUpdate(
            id,
            { quantidade: soma },
            { new:true, runValidators:true }
        )
        return updatedProduto
    } catch (error) {
        console.error('Erro ao atualizar Produto', error.message)
        throw error
    }
}

export const menosProduto = async(id, quantidade) => {
    try {
        const produto = await Produto.findById(id).exec()
        const menos = parseInt(produto.quantidade) - parseInt(quantidade)
        const updatedProduto = await Produto.findByIdAndUpdate(
            id,
            { quantidade: menos },
            { new:true, runValidators:true }
        )
        return updatedProduto
    } catch (error) {
        console.error('Erro ao atualizar Produto', error.message)
        throw error
    }
}