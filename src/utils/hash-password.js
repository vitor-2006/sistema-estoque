import bcrypt from "bcryptjs";
export default {
  hashPassword(password) {
    return bcrypt.hashSync(password, 10);
  },
  compareHashedPassword(password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword);
  },
};
