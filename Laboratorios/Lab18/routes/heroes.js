const express = require('express');
const router = express.Router();

const heroes_controller = require('../controllers/heroes_controller')

router.get('/add', heroes_controller.addHeroe)
router.post('/add', heroes_controller.saveHeroe)

router.get('/detalle/:heroe_id', heroes_controller.seeHeroe);
router.get('/', heroes_controller.index);

router.get('/editar/:heroe_id', heroes_controller.updateHeroe);
router.post('/editar/:heroe_id', heroes_controller.processUpdate);




module.exports = router;