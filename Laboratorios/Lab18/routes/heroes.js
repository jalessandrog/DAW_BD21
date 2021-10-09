const express = require('express');
const router = express.Router();

const heroes_controller = require('../controllers/heroes_controller')

router.get('/add', heroes_controller.addHeroe)
router.post('/add', heroes_controller.saveHeroe)

router.get('/:heroe_id', heroes_controller.index);
router.get('/', heroes_controller.index);



module.exports = router;