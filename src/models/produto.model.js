import mongoose from "mongoose";

const ProdutoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    quantidade: {
        type: Number,
        required: true
    }
})

export const Produto = mongoose.model('produtos', ProdutoSchema)