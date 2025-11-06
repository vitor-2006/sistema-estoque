import { Movimento } from "../models/schemaMov.js";

export default {
  entradaMov(data) {
    return Movimento.create(data);
  },
  saidaMov(data) {
    return Movimento.create(data)
  },
  historico(idProduto) {
    return Movimento.find({ idProduto })
  },
};
