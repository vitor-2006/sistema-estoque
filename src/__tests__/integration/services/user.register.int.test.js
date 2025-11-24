import { User } from "../../../models/user.model";
import userService from "../../../services/user.service";

beforeEach(async () => {
  await User.deleteMany();
  userData = {
    name: 'rightUser',
    email: 'right@example.com',
    password: 'teste1234',
  };

  await userService.createUser(userData);
});

describe("when we try to register with an existing email", () => {
  it("throws a validation error", async () => {
    await expect(
      userService.createUser({
        name: 'rightUser',
        email: userData.email,
        password: "senhaErrada",
      })
    ).rejects.toThrow("E-mail já cadastrado.");
  });
});

describe("when we try to register with right credentials", () => {
  it("the user is registered", async () => {
    const register = await userService.createUser({
          name: 'difUser',
          email: 'dif@example.com',
          password: "difpass",
        })

        expect(register).toHaveProperty('_id');
        expect(register._id).toBeDefined();
  });
})