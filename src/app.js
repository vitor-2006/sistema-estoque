import express from "express";
import userRoutes from "./routes/user.routes.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import produtoRoutes from "./routes/produto.routes.js";
import movimentoRoutes from "./routes/movimento.routes.js";

const app = express();
app.use(express.json());

app.use("/api", userRoutes);
app.use("/produto", produtoRoutes);
app.use("/movimento", movimentoRoutes);

app.use(errorMiddleware);

export default app;
