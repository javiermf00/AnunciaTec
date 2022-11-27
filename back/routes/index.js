var express = require('express')
var router = express.Router();

let AnuncioController = require('../controllers/AnuncioController')

router.get('/', AnuncioController.home);
router.post('/update', AnuncioController.updateanuncio);
router.get('/bring', AnuncioController.bringanuncio);
router.post('/create', AnuncioController.createanuncio);

module.exports = router;
