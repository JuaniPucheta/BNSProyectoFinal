const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const publicacionRoutes = require('./routes/publicacionesRoutes');
const conectarBD = require('./db/db');

const app = express();
const PORT = process.env.PORT || 5000;

//* Conexion a MongoDB
conectarBD();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

//* Rutas
app.use('/api', publicacionRoutes);

//* Iniciar servidor
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
