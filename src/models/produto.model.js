import mongoose from "mongoose";
import { Movimento } from "./movimento.model.js";

const ProdutoSchema = new mongoose.Schema({
  idUser: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User", // Refers to the 'User' model
    required: true,
  },
  nome: {
    type: String,
    required: true,
  },
  quantidade: {
    type: Number,
    required: true,
  },
  preco: {
    type: Number,
    required: true,
  },
});

ProdutoSchema.virtual("movimento", {
  ref: "movimentação",
  localField: "_id",
  foreignField: "idProduto",
});

ProdutoSchema.set("toJSON", { virtuals: true });
ProdutoSchema.set("toObject", { virtuals: true });

ProdutoSchema.pre("findOneAndDelete", async function (next) {
  const produto = await this.model.findOne(this.getQuery());
  if (produto) {
    await Movimento.deleteMany({ idProduto: produto._id });
  }
  next();
});

export const Produto = mongoose.model("produtos", ProdutoSchema);
