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
};
