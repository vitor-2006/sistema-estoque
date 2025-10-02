import { Produto } from "./schemaProduto.js";

export const verificPorIdProduto = async (id) => {
    try {
      return await Produto.find({id: id})
    } catch (error) {
      console.error('Erro ao pesquisar Produto', error.message);
      throw error;
    }
  }