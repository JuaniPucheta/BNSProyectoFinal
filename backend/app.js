//* Importaciones
import express from "express";
import cors from "cors"
import router from "./routes/publication-routes";
import commentRouter from "./routes/comments-routes";
import userRouter from "./routes/user-routes";
import connect from "./db/db";
import jwt from "jsonwebtoken";
import "dotenv/config";


const app = express();
const PORT = process.env.PORT || 3000;

//* Middlewares
app.use(express.json());
app.use(cors());

//* Rutas
app.use("/publications", router);
app.use("/", commentRouter);
app.use("/", userRouter);

//* DB 
connect();

//* Servidor
app.listen(PORT, () => console.log(`Servidor en puerto: ${PORT}`));
