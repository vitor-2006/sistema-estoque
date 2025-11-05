import repo from '../repositories/produto.repository.js';
import createError from '../utils/app-error.js';

export default {
  async createProduto(data) {
    const createProduct =  await repo.create({
      nome: data.nome.trim(),
      quantidade: data.quantidade,
    });
    const findProductById = repo.findProductById(createProduct.id)
     return findProductById
  },

  async soma(data) {
    const produto = await repo.findProductById(data.idProduto)
    if (!produto) throw createError('Produto não encontrado.', 404);
    console.log(produto.quantidade)
    const soma = produto.quantidade += data.quantidade
    
    const payload = { ...produto,
      quantidade: soma
     }

    return await repo.somaProduto(data.idProduto, payload)
  },

  async menos(data) {
    const produto = await repo.findProductById(data.idProduto)
    if (!produto) throw createError('Produto não encontrado.', 404);
    const payload = { ...produto }
    payload.quantidade =- data.quantidade
    return await repo.menosProduto(data.idProduto, payload)
  }
};