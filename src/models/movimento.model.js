import mongoose from "mongoose";

const MovimentoSchema = new mongoose.Schema({
    idProduto: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Produto', // Refers to the 'Produto' model
        required: true
    },
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User', // Refers to the 'User' model
        required: true
        },
    tipo: {
        type: String,
        require: true
    },
    quantidade: {
        type: Number,
        required: true
    },
},{
    timestamps: true
})


export const Movimento = mongoose.model('movimentação', MovimentoSchema)