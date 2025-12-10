import userService from "../services/user.service.js";

export default {
  async create(req, res, next) {
    try {
      const user = await userService.createUser(req.body);
      return res.status(201).json({
        message: "Usuário registrado com sucesso.",
        user: user,
      });
    } catch (error) {
      next(error);
    }
  },

  async login(req, res, next) {
    try {
      const user = await userService.loginUser(req.body);
      return res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  },

  async list(req, res, next) {
    try {
      const users = await userService.listUsers();
      return res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  },

  async get(req, res, next) {
    try {
      const user = await userService.getUser(req.userId);
      return res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const user = await userService.updateUser(req.userId, req.body);
      return res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  },

  async remove(req, res, next) {
    try {
      await userService.removeUser(req.userId);
      return res.status(204).end();
    } catch (error) {
      next(error);
    }
  },
};
