import { Produto } from "../models/produto.model.js";

export default {
   create(data) {
    return Produto.create(data);
  },
  somaProduto(id, data) {
    const novoProduto = Produto.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
    return novoProduto
  },
  menosProduto(id, data) {
    return Produto.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  },
  findProductById(id){
    return Produto.findById(id)
  }
};
