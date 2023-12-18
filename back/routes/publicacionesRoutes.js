const express = require('express');
const router = express.Router();
const publicacionesController = require('../controllers/publicacionesController');

router.get('/publicaciones', publicacionesController.obtenerPublicaciones);
router.get('/publicaciones/:id', publicacionesController.obtenerPublicacionPorId);
router.post('/publicaciones', publicacionesController.crearPublicacion);
router.put('/publicaciones/:id', publicacionesController.actualizarPublicacion);
router.delete('/publicaciones/:id', publicacionesController.eliminarPublicacion);
router.post('/publicaciones/:id/comentarios', publicacionesController.crearComentario);

module.exports = router;
