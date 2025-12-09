import mongoose from "mongoose";

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
});

ProdutoSchema.virtual("movimento", {
  ref: "Movimento",
  localField: "_id",
  foreignField: "idProduto",
});

export const Produto = mongoose.model("produtos", ProdutoSchema);
