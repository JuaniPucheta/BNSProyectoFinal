const mongoose = require('mongoose');

const comentarioSchema = new mongoose.Schema({
  contenido: String,
});

const Comentario = mongoose.model('Comentario', comentarioSchema);

module.exports = Comentario;
