const express = require('express');
const comentarioController = require('../controllers/comentarioController');

const router = express.Router();

router.post('/', comentarioController.createComentario);
router.delete('/:id', comentarioController.deleteComentario);

module.exports = router;
