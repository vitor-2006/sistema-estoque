import request from 'supertest'
import { app } from '../../../configApp'
import { User } from '../../../../models/user.model'
import userService from '../../../../services/user.service'

let userData

beforeEach(async () => {
  await User.deleteMany();
  userData = {
    name: 'rightUser',
    email: 'right@example.com',
    password: 'teste1234',
  };

  await userService.createUser(userData);
});

describe('user controller - GET api/login', () => {
    describe('when logging in a user with valid payload', () => {
        it('should return status 201 and log user', async () => {
            const loginData = {
                email: 'right@example.com',
                password: 'teste1234'
            }

            const response = await request(app)
            console.log(response.body)

            .get('/api/login')
            .send(loginData)
            .expect(200)
            expect(response.body).toHaveProperty('_id');
            expect(response.body).toHaveProperty('name');
            expect(response.body).toHaveProperty('email');
            expect(response.body).toHaveProperty('password');
            
        })
    })

    describe('when logging a user with invalid payload', () => {
    
        it('should return status 404 when email is not found', async () => {
            const loginData = {
                email: 'wrong@example.com',
                password: 'teste1234'
            }
    
          const response = await request(app)
            .get('/api/login')
            .send(loginData)
            .expect(404);
    
          expect(response.body).toHaveProperty('error');
          expect(response.body.error).toBe('usuário não encontrado.');
        });
    
        it('should return status 400 when password is wrong', async () => {
            const loginData = {
                email: 'right@example.com',
                password: 'wrong1234'
            }
    
          const response = await request(app)
            .post('/api/login')
            .send(loginData)
            .expect(400);

            console.log(response.body)
    
          expect(response.body).toHaveProperty('error');
          expect(response.body.error).toBe('dados incorretos.');
        });
    });
})