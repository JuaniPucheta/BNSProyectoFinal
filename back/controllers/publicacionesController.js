const Publicacion = require('../models/publicacionModel');

const obtenerPublicaciones = async (req, res) => {
    try {
        const publicaciones = await Publicacion.find();
        res.json(publicaciones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenerPublicacionPorId = async (req, res) => {
    try {
        const publicacion = await Publicacion.findById(req.params.id);
        res.json(publicacion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const crearPublicacion = async (req, res) => {
    try {
        const publicacion = new Publicacion(req.body);
        await publicacion.save();
        res.json({ mensaje: 'Publicacion creada' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const actualizarPublicacion = async (req, res) => {
    try {
        const publicacion = await Publicacion.findById(req.params.id);
        publicacion.titulo = req.body.titulo;
        publicacion.descripcion = req.body.descripcion;
        publicacion.imagen = req.body.imagen;
        await publicacion.save();
        res.json({ mensaje: 'Publicacion actualizada' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const eliminarPublicacion = async (req, res) => {
    try {
        const publicacion = await Publicacion.findById(req.params.id);
        await publicacion.remove();
        res.json({ mensaje: 'Publicacion eliminada' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const crearComentario = async (req, res) => {
    try {
      const publicacion = await Publicacion.findById(req.params.id);
      if (!publicacion) {
        return res.status(404).json({ message: 'Publicación no encontrada' });
      }
  
      const nuevoComentario = req.body;
      publicacion.comentarios.push(nuevoComentario);
  
      const publicacionGuardada = await publicacion.save();
      res.status(201).json(publicacionGuardada.comentarios);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};
  
module.exports = {
    obtenerPublicaciones,
    obtenerPublicacionPorId,
    crearPublicacion,
    actualizarPublicacion,
    eliminarPublicacion,
};