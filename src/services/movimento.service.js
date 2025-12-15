import repo from "../repositories/movimento.repository.js";
import createError from "../utils/app-error.js";
import produtoService from "./produto.service.js";
import { Produto } from "../models/produto.model.js";

export default {
  async entradaMovimento(data, params, userId) {
    const produto = await Produto.findById(params._id);
    if (produto === null) throw createError("Produto não encontrado.", 404);
    if (produto.idUser.toString() !== userId.toString())
      throw createError(
        "Você não tem permissão para modificar este produto.",
        403
      );

    await produtoService.soma(data, params._id);

    return await repo.Mov({
      idProduto: params._id,
      idUser: userId,
      tipo: "entrada",
      quantidade: data.quantidade,
      valor: produto.preco *= data.quantidade
    });
  },

  async saidaMovimento(data, params, userId) {
    const produto = await Produto.findById(params._id);
    if (!produto) throw createError("Produto não encontrado.", 404);
    if (produto.idUser.toString() !== userId)
      throw createError(
        "Você não tem permissão para modificar este produto.",
        403
      );

    await produtoService.menos(data, params._id);

    return await repo.Mov({
      idProduto: params._id,
      idUser: userId,
      tipo: "saida",
      quantidade: data.quantidade,
      valor: produto.preco *= data.quantidade
    });
  },

  async historico(params) {
    const movimento = await repo.historico(params._id);
    if (!movimento) throw createError("produto não encontrado.", 404);
    if (movimento.length === 0) throw createError("esse produto não possui movimentações", 404)
    return movimento;
  },
};
