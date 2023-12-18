const mongoose = require('mongoose');

const comentarioSchema = new mongoose.Schema({
    usuario: {
        user: String,
        content: String
    },
    contenido: {
        type: String,
    },
});

const publicacionSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    imagen: {
        type: String,
        required: false,
    },
    comentarios: [comentarioSchema],
});

module.exports = mongoose.model('Publicacion', publicacionSchema);
