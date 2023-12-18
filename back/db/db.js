// src/db.js
const mongoose = require('mongoose');

const conectarBD = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/bnsProyectoFinal', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión exitosa a la base de datos');
  } catch (error) {
    console.error('Error de conexión a la base de datos:', error.message);
    process.exit(1); 
  }
};

module.exports = conectarBD;
