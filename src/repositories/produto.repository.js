import { Produto } from "../models/schemaProduto.js";

export default {
  createProduto(data) {
    return Produto.create(data);
  },
  somaProduto(id, data) {
    return Produto.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  },
  menosProduto(id, data) {
    return Produto.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  },
};
