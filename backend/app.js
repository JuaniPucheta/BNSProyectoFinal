//* Importaciones
import router from "./routes/publication-routes.js";
import commentRouter from "./routes/comments-routes.js";
import express from "express";
import connect from "./db/db.js";
import cors from "cors"

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
