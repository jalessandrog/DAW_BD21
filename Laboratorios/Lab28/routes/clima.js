const express = require('express');
const router = express.Router();

const isAuth = require('../middlewares/is-Auth');
const clima_controller = require('../controllers/clima_controller')


router.get('/', clima_controller.index);

router.get('/error', clima_controller.error);



module.exports = router;