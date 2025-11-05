import repo from "../repositories/movimento.repository.js";
import createError from "../utils/app-error.js";
import produtoService from './produto.service.js'

export default {
  async entradaMovimento(data) {
    console.log(data)


    await produtoService.soma(data)

    return await repo.entradaMov({
      idProduto: data.idProduto.trim(),
      tipo: "entrada",
      quantidade: data.quantidade,
    });
    
  },

  async saidaMovimento(data) {
    await produtoService.menos(data)
    return await repo.saidaMov({
      idProduto: data.idProduto.trim(),
      tipo: "saida",
      quantidade: data.quantidade,
    });
  },

  async historico(data) {
    const movimento = await repo.findById(data.id);
    if (!movimento) throw createError("Usuário não encontrado.", 404);
    return movimento;
  },
};
