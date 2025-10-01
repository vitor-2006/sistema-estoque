import { Movimento } from "./schemaMov";
import { Produto } from "./schemaProduto";
import { verificPorIdProduto } from "./verificar";

export const entradaMov = async(idProduto, quantidade) => {
    try {
        const arrayProduto = await verificPorIdProduto(idProduto) 
        if (arrayProduto.lenth === 0) {
            return false
        }
        const num1 = quantidade
        const num2 = Produto.findById(idProduto, "quantidade").exec()
        const soma = num2 + num1
        const newMovimento = new Movimento({idProduto, quantidade:soma, tipo:"entrada"})
        return await newMovimento.save()
    } catch(error) {
        console.error('Erro ao entrar estoque', error.message)
        throw error
    }
}