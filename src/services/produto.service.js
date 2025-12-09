import repo from "../repositories/produto.repository.js";
import createError from "../utils/app-error.js";
import { User } from "../models/user.model.js";

export default {
  async createProduto(data, userId) {
    const createProduct = await repo.create({
      idUser: userId,
      nome: data.nome.trim(),
      quantidade: data.quantidade,
    });
    const findProductById = repo.findProductById(createProduct.id);
    return findProductById;
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
    return await repo.findProductByUser(userID)
  }
};
