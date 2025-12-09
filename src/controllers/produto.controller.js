import produtoService from "../services/produto.service.js";

export default {
  async create(req, res, next) {
    try {
      const produto = await produtoService.createProduto(req.body, req.userId);
      return res.status(201).json(produto);
    } catch (error) {
      next(error);
    }
  },

  // async get(req, res, next) {
  //   try {
  //     const produto = await produtoService.getProduto(req.params.id);
  //     return res.status(200).json(produto);
  //   } catch (error) {
  //     next(error);
  //   }
  // },

  async storage(req, res, next) {
    try {
      const produto = await produtoService.ProductByUser(req.userId);
      return res.status(200).json(produto);
    } catch (error) {
      next(error);
    }
  },

  async edit(req, res, next) {
    try {
      const produto = await produtoService.updateProduto(
        req.body,
        req.params.id
      );
      return res.status(200).json(produto);
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      await produtoService.removeProduto(req.params.id);
      return res.status(204).end();
    } catch (error) {
      next(error);
    }
  },
};
