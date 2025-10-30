import { User } from './schema.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function Register(req, res) {
    try {
        const { nome, email, senha, ...outrosDados } = req.body;// Pega os dados do corpo da requisição

        if (!nome || !email || !senha) {
            return res.status(400).send({ message: "Os Campos: nome, email e senha são obrigatorios" })// Verifica se os campos estão preenchidos
        };

        const hashSenha = await bcrypt.hash(senha, 10); // Criptografa a senha

        const novoUsuario = await User.create({ nome, email, senha: hashSenha, ...outrosDados });// Cria o novo usuario no banco de dados
        const payload = {userId: novoUsuario._id, email: novoUsuario.email, role: novoUsuario.role};

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' }) // Gera um token JWT para o usando o usurio de base
        return res.status(201).json({ message: "usuario criado com sucesso", novoUsuario: novoUsuario, token: token});//notifica que o usuario token foi criado com sucesso

    } catch (error) {
        console.error('Erro ao criar usuario', error.message);
        throw error;
    };
};