import repo from "../repositories/produto.repository.js";
import createError from "../utils/app-error.js";

function ensureValidPayload({ nome, quantidade, preco }) {
  if (!nome?.trim()) throw createError("Nome é obrigatório.", 400);
  if (!quantidade) throw createError("quantidade é obrigatório.", 400);
  if (!preco) throw createError("preço é obrigatório.", 400);
  if (isNaN(quantidade)) throw createError("quantidade inválida.", 400);
  if (isNaN(preco)) throw createError("preço inválido.", 400);
}

export default {
  async createProduto(data, userId) {
    ensureValidPayload(data);
    const createProduct = await repo.create({
      idUser: userId,
      nome: data.nome.trim(),
      quantidade: parseInt(data.quantidade),
      preco: Number(data.preco).toFixed(2),
    });
    return createProduct
  },

  async soma(data, params) {
    const produto = await repo.findProductById(params);
    if (!produto) throw createError("Produto não encontrado.", 404);
    const soma = (produto.quantidade += data.quantidade);

    const payload = { ...produto, quantidade: soma };

    return await repo.newProduto(params, payload);
  },

  async menos(data, params) {
    const produto = await repo.findProductById(params);

    if (!produto) throw createError("Produto não encontrado.", 404);

    const menos = (produto.quantidade -= data.quantidade);

    const payload = { ...produto, quantidade: menos };
    return await repo.newProduto(params, payload);
  },

  // async getProduto(id) {
  //   const produto = await repo.findProductById(id);
  //   if (!produto) throw createError("produto não encontrado.", 404);
  //   return produto;
  // },

  async ProductByUser(userID) {
    return await repo.findProductByUser(userID);
  },

  async updateProduto(data, id) {
    const payload = { ...data };

    Object.keys(payload).forEach((key) => {
      if (payload[key] === undefined) delete payload[key];
    });

    if (Object.keys(payload).length === 0) {
      throw createError("Nenhum campo informado para atualização.", 400);
    }

    const updated = await repo.updateById(id, payload);
    if (!updated) throw createError("produto não encontrado.", 404);
    return updated;
  },

  async removeProduto(id) {
    const deleted = await repo.deleteById(id);
    if (!deleted) throw createError("produto não encontrado.", 404);
  },
};
