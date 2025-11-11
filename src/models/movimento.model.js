import mongoose from "mongoose";

const MovimentoSchema = new mongoose.Schema({
    idProduto: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    quantidade: {
        type: Number,
        required: true
    },
},{
    timestamps: true
})


export const Movimento = mongoose.model('movimentação', MovimentoSchema)