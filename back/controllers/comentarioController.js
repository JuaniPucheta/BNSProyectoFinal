const Comentario = require('../models/comentarioModel');

const comentarioController = {
  createComentario: async (req, res) => {
    try {
      const nuevoComentario = new Comentario(req.body);
      await nuevoComentario.save();
      res.json(nuevoComentario);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el comentario.' });
    }
  },

  deleteComentario: async (req, res) => {
    try {
      await Comentario.findByIdAndDelete(req.params.id);
      res.json({ message: 'Comentario eliminado correctamente.' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el comentario.' });
    }
  },
};

module.exports = comentarioController;
