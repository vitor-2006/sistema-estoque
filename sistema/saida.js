import { menosProduto } from "./atualizarProduto.js";
import { Movimento } from "./schemaMov.js";
import { verificPorIdProduto } from "./verificar.js";

export const saidaMov = async(idProduto, quantidade) => {
    try {
        const arrayProduto = await verificPorIdProduto(idProduto) 
        if (arrayProduto.lenth === 0 || quantidade <= 0) {
            return false
        }
        await menosProduto(idProduto, quantidade)
        const newMovimento = new Movimento({idProduto, quantidade:quantidade, tipo:"saída"})
        return await newMovimento.save()
    } catch(error) {
        console.error('Erro ao entrar estoque', error.message)
        throw error
    }
}