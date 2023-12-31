const express = require('express');
const comentarioRoutes = require('./comentarioRoutes');
const {
    obtenerPublicaciones,
    obtenerPublicacionPorId,
    crearPublicacion,
    actualizarPublicacion,
    eliminarPublicacion,
} = require('../controllers/publicacionesController');

const router = express.Router();

//* Rutas CRUD de Publicaciones
router.get('/publicaciones', (req, res) => obtenerPublicaciones(req, res));
router.get('/publicaciones/:id', (req, res) => obtenerPublicacionPorId(req, res));
router.post('/publicaciones', (req, res) => crearPublicacion(req, res));
router.put('/publicaciones/:id', (req, res) => actualizarPublicacion(req, res));
router.delete('/publicaciones/:id', (req, res) => eliminarPublicacion(req, res));

module.exports = router;
