import { Movimento } from "../models/movimento.model.js";

export default {
  Mov(data) {
    return Movimento.create(data);
  },
  historico(idProduto) {
    return Movimento.find({ idProduto });
  },
};
