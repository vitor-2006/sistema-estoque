import { Movimento } from "./schemaMov.js";
import { verificPorIdProduto } from "./verificar.js";

export const historico = async(idProduto) => {
    try {
        const arrayProduto = await verificPorIdProduto(idProduto) 
        if (arrayProduto.length === 0) {
            return false
        }
        return await Movimento.find({idProduto: idProduto})
    } catch (error) {
        console.log('erro ao buscar o histórico', error.message)
        throw error
    }
}