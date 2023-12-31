const mongoose = require('mongoose');
const Comentario = require('./comentarioModel');

const publicacionSchema = new mongoose.Schema({
  titulo: String,
  descripcion: String,
  imagen: String,
  comentarios: [Comentario.schema],
});

const Publicacion = mongoose.model('Publicacion', publicacionSchema);

module.exports = Publicacion;
