import userRepository from '../../../repositories/user.repository.js';
import User from '../../../models/user.model.js';

describe ('when we try to login a user with an email that doesnt exists, or invalid password', () => {
  it ('throws a validation error', async () => {
    const userData = {
      name: 'rightUser',
      email: `right-${Date.now()}@example.com`,
      password: 'rightpassword123',
    };

    const loginData = {
      email: `wrong-${Date.now()}@example.com`,
      password: 'wrongpassword123',
    };

    await User.create(userData)

    await userRepository.login(loginData);

    await expect(userRepository.login(loginData)).rejects.toThrow();
  });
})

describe('when we try to login a valid user ', () => {
  it('the logged in user has an id', async () => {
    const userData = {
      name: 'rightUser',
      email: `right-${Date.now()}@example.com`,
      password: 'rightpassword123',
    };

    const loginData = {
      email: `right-${Date.now()}@example.com`,
      password: 'rightpassword123',
    };

    await User.create(userData)

    const loggedUser = await userRepository.login(loginData);

    expect(loggedUser).toHaveProperty('_id');
    expect(loggedUser._id).toBeDefined();
    
  });
})