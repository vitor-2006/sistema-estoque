import mongoose from "mongoose";

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
    minlength: 8,
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

export const User = mongoose.model("User", UserSchema);
