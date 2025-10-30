import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    nome:{
        type: String,
        require: true,
        trim: true
    },
    email:{
        type: String,
        require: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    senha: {
        type: String,
        require: true,
        minlength: 8
    },
    role: {
        type: [String],
        enum: ["ADMIN", "USER"],
        default: "USER",
        require: true
      }
})
export const User = mongoose.model( "User", UserSchema);