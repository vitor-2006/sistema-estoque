import { User } from "../../../../models/user.model";
import userService from "../../../../services/user.service";

let userData;

beforeEach(async () => {
  await User.deleteMany();
  userData = {
    name: 'rightUser',
    email: 'right@example.com',
    password: 'teste1234',
  };

  await userService.createUser(userData);
});

describe("when we try to login with wrong password", () => {
  it("throws a validation error", async () => {
    await expect(
      userService.loginUser({
        email: userData.email,
        password: "senhaErrada",
      })
    ).rejects.toThrow("dados incorretos.");
  });
});

describe("when we try to login with wrong email", () => {
    it("throws a validation error", async () => {
      await expect(
        userService.loginUser({
          email: "wrong@example.com",
          password: userData.password,
        })
      ).rejects.toThrow('usuário não encontrado.');
    });
  });

describe("when we try to login with right credentials", () => {
  it("the user logs in", async () => {
    const login = await userService.loginUser({
      email: userData.email,
      password: userData.password,
    });

    expect(login).toHaveProperty("token");
  });
});
