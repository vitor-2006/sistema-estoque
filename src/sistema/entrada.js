import { SomaProduto } from "./atualizarProduto.js";
import { Movimento } from "./schemaMov.js";
import { verificPorIdProduto } from "./verificar.js";

export const entradaMov = async(idProduto, quantidade) => {
    try {
        const arrayProduto = await verificPorIdProduto(idProduto) 
        if (arrayProduto.length === 0 || quantidade <= 0) {
            return false
        }
        await SomaProduto(idProduto, quantidade)
        const newMovimento = new Movimento({idProduto:idProduto, quantidade:quantidade, tipo:"entrada"})
        return await newMovimento.save()
    } catch(error) {
        console.error('Erro ao entrar estoque', error.message)
        throw error
    }
}