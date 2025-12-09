import { Produto } from "../models/produto.model.js";
import { User } from "../models/user.model.js";

export default {
  create(data) {
    return Produto.create(data);
  },
  newProduto(id, data) {
    const novoProduto = Produto.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
    return novoProduto;
  },

  findProductById(id) {
    return Produto.findById(id);
  },

  async findProductByUser(data) {
    const user = await User.findById(data);
    if (!user) throw createError("usuário não encontrado.", 404);
    await user.populate("produto");
    return user.produto;
  },

  updateById(id, data) {
    return Produto.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  },

  deleteById(id) {
    return Produto.findByIdAndDelete(id);
  },
};
