import produtoService from "../services/produto.service.js";

export default {
  async create(req, res, next) {
    try {
      const produto = await produtoService.createProduto(req.body);
      res.status(201).json(produto);
    } catch (error) {
      next(error);
    }
  },

  async somaFim(req, res, next) {
    try {
      const produto = await produtoService.soma(req.body);
      res.status(201).json(produto);
    } catch (error) {
      next(error);
    }
  },

  async menosFim(req, res, next) {
    try {
      const produto = await produtoService.menos(req.body);
      res.status(201).json(produto);
    } catch (error) {
      next(error);
    }
  },
};
