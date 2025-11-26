import { Produto } from "../models/produto.model.js";

export default {
   create(data) {
    return Produto.create(data);
  },
  newProduto(id, data) {
    const novoProduto = Produto.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
    return novoProduto
  },
  findProductById(id){
    return Produto.findById(id)
  }
};
