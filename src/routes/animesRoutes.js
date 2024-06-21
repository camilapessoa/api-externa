const express = require('express')
const router = express.Router();

const { obterAnimePorNome } = require('../controller/animeController')

router.get('/buscar', obterAnimePorNome);

module.exports = router;