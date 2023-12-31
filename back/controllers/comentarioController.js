const Publicacion = require('../models/publicacionModel');

const createComentario = async (req, res) => {
  try {
    const { publicacionId } = req.params; 
    const publicacion = await Publicacion.findById(publicacionId);

    if (!publicacion) {
      return res.status(404).json({ error: 'La publicación no existe para agregar un comentario' });
    }

    const nuevoComentario = new Comentario({
      contenido: req.body.contenido,
    });

    publicacion.comentarios.push(nuevoComentario); 
    await publicacion.save();

    res.json(nuevoComentario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el comentario en la publicacion' });
  }
};

const deleteComentario = async (req, res) => {
  try {
    const { publicacionId, comentarioId } = req.params;
    const publicacion = await Publicacion.findById(publicacionId);

    if (!publicacion) {
      return res.status(404).json({ error: 'La publicación no existe.' });
    }

    const comentario = publicacion.comentarios.id(comentarioId);

    if (!comentario) {
      return res.status(404).json({ error: 'El comentario no existe.' });
    }

    comentario.remove();
    await publicacion.save();

    res.json({ mensaje: 'Comentario eliminado.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el comentario.' });
  }
};


module.exports = {
  createComentario,
  deleteComentario,
}
