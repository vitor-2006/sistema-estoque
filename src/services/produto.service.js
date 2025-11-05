import repo from '../repositories/produto.repository.js';
import createError from '../utils/app-error.js';

export default {
  async createProduto(data) {

    return repo.create({
      nome: data.nome.trim(),
      quantidade: data.quantidade,
    });
  },

  async soma(id, data, quantidade) {
    const produto = await repo.findById(id)
    if (!produto) throw createError('Produto não encontrado.', 404);
    const payload = { ...data }
    payload.quantidade =+ quantidade
    return await repo.somaProduto(id, payload)
  },

  async menos(id, data, quantidade) {
    const produto = await repo.findById(id)
    if (!produto) throw createError('Produto não encontrado.', 404);
    const payload = { ...data }
    payload.quantidade =- quantidade
    return await repo.menosProduto(id, payload)
  }
};