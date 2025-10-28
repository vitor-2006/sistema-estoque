import jwt from 'jsonwebtoken';

export async function middleWare(req, res, next) {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'Token não fornecido' });
        }
        const decoded = jwt.verify(token, process.env.ACESS_TOKEN_SECRET);
        req.user = decoded;
        next();

    } catch (error) {
        console.error("Erro no middleware de autenticação:", error.message);
        return res.status(403).json({ message: "Token inválido ou expirado" });
    }
}