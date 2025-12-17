import mongoose from "mongoose";
import { Produto } from "./produto.model.js";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, "Invalid email"],
  },
  password: {
    type: String,
    require: true,
    // select: false
  },
  role: {
    type: [String],
    enum: ["ADMIN", "USER"],
    default: "USER",
    require: true,
  },
});

UserSchema.virtual("produto", {
  ref: "produtos",
  localField: "_id",
  foreignField: "idUser",
});

UserSchema.set("toJSON", { virtuals: true });
UserSchema.set("toObject", { virtuals: true });

UserSchema.pre("findOneAndDelete", async function (next) {
  const user = await this.model.findOne(this.getQuery());
  if (user) {
    await Produto.deleteMany({ idUser: user._id });
  }
  next();
});

export const User = mongoose.model("User", UserSchema);
