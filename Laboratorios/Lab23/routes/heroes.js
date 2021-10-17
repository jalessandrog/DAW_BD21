const express = require('express');
const router = express.Router();

const isAuth = require('../middlewares/is-Auth');
const heroes_controller = require('../controllers/heroes_controller')

router.get('/add', isAuth, heroes_controller.addHeroe)
router.post('/add', isAuth, heroes_controller.saveHeroe)

router.get('/editar/:heroe_id', isAuth, heroes_controller.updateHeroe);
router.post('/editar/:heroe_id', isAuth, heroes_controller.processUpdate);

router.get('/detalle/:heroe_id', heroes_controller.seeHeroe);
router.get('/', heroes_controller.index);

router.get('/error', heroes_controller.error);



module.exports = router;