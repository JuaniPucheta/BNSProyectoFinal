//* Importaciones
import express from "express";
import cors from "cors"
import router from "./routes/publication-routes.js";
import commentRouter from "./routes/comments-routes.js";
import connect from "./db/db.js";
import jwt from "jsonwebtoken";


const app = express();
const PORT = process.env.PORT || 3000;

//* Middlewares
app.use(express.json());
app.use(cors());

//* Rutas
app.use("/publications", router);
app.use("/", commentRouter);

//* DB 
connect();

//* Servidor
app.listen(PORT, () => console.log(`Servidor en puerto: ${PORT}`));
