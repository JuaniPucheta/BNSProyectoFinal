const mongoose = require('mongoose');

const conectarBD = async () => {
  mongoose.connect('mongodb://127.0.0.1:27017/bnsProyectoFinal')
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });
};

module.exports = conectarBD;
