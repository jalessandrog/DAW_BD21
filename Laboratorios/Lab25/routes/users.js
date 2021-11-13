const express = require('express');
const router = express.Router();

const isAuth = require('../middlewares/is-Auth');

const users_controller = require('../controllers/users_controller');


router.get('/login', users_controller.login);
router.post('/login', users_controller.processLoggin);
router.get('/logout', isAuth, users_controller.logout);

router.get('/register', users_controller.register);
router.post('/register', users_controller.processRegister);

router.get('/aboutme', users_controller.aboutMe);
module.exports = router;