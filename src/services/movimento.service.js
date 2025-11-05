import repo from "../repositories/movimento.repository.js";
import createError from "../utils/app-error.js";

export default {
  async entradaMovimento(data) {
    return repo.entradaMov({
      idProduto: data.idProduto.trim(),
      tipo: "entrada",
      quantidade: data.quantidade,
    });
  },

  async saidaMovimento(data) {
    return repo.saidaMov({
      idProduto: data.idProduto.trim(),
      tipo: "saida",
      quantidade: data.quantidade,
    });
  },

  async historico(id) {
    const movimento = await repo.findById(id);
    if (!movimento) throw createError("Usuário não encontrado.", 404);
    return movimento;
  },
};
