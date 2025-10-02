import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import { routesProduto } from './sistema/routes.js';

dotenv.config()
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASSWORD

const app = express();
const port = 3000;

mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPass}@cluster0.nkow1bb.mongodb.net/sistemaEstoque?retryWrites=true&w=majority&appName=Cluster0`
)

mongoose.connection.once("open", () => {
    console.log("Conectado ao mongoDB")
})

mongoose.connection?.on("error", (err) => {
    console.error(`Error to connect - MongoDB: Error: ${err.message}`)
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routesProduto)

app.listen(port, () => {
    console.log("Api iniciada na porta: " + port);
});