import produtoService from "../services/produto.service.js";

export default {
  async create(req, res, next) {
    try {
      const produto = await produtoService.createProduto(req.body);
      return res.status(201).json(produto);
    } catch (error) {
      next(error);
    }
  },

  async get(req, res, next) {
    try {
      const produto = await produtoService.getProduto(req.params.id);
      return res.status(200).json(produto);
    } catch (error) {
      next(error);
    }
  },
};
