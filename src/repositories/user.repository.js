import { User } from "../models/schemaUser.js"

export default {
  create(data) {
    return User.create(data);
  },
  login(data) {
    return User.findOne(data)
  },
  findAll() {
    return User.find();
  },
  findById(id) {
    return User.findById(id);
  },
  updateById(id, data) {
    return User.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  },
  deleteById(id) {
    return User.findByIdAndDelete(id);
  },
  findByEmail(email) {
    return User.findOne({ email });
  },
};