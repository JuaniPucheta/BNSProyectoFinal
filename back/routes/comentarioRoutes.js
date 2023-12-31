const express = require('express');
const {createComentario, deleteComentario} = require('../controllers/comentarioController');

const router = express.Router();

router.post('/comentarios', (req, res) => createComentario(req, res));
router.delete('/comentarios/:id', (req, res) => deleteComentario(req, res));

module.exports = router;
