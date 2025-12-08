import mongoose from "mongoose";

const MovimentoSchema = new mongoose.Schema({
    idProduto: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Produto' // Refers to the 'Produto' model
    },
    tipo: {
        type: [String],
        enum: ["entrada", "saída"],
        default: "entrada",
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