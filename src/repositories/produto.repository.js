import { Produto } from "../models/schemaProduto.js";

export default {
   create(data) {
    return Produto.create(data);
  },
  somaProduto(id, data) {
    const novoProduto = Produto.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
    // console.log(novoProduto)
    return novoProduto
  },
  menosProduto(id, data) {
    return Produto.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  },
  findProductById(id){
    console.log("repository")
    return Produto.findById(id)
  }
};
