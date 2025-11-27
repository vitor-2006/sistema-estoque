import movimentoService from "../services/movimento.service.js";

export default {
  async entrada(req, res, next) {
    try {
      const movimento = await movimentoService.entradaMovimento(req.body);
      res.status(201).json(movimento);
    } catch (error) {
      next(error);
    }
  },

  async saida(req, res, next) {
    try {
      const movimento = await movimentoService.saidaMovimento(req.body);
      res.status(201).json(movimento);
    } catch (error) {
      next(error);
    }
  },

  async historico(req, res, next) {
    try {
        const movimento = await movimentoService.historico(req.params);
        res.status(200).json(movimento);
    } catch (error) {
      next(error);
    }
  },
};
