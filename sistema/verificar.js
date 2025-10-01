import { Produto } from "./schemaProduto";

export const verificPorIdProduto = async (id) => {
    try {
      return await Produto.find({id: id})
    } catch (error) {
      console.error('Erro ao pesquisar Produto', error.message);
      throw error;
    }
  }