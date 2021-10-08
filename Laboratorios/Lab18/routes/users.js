const express = require('express');
const router = express.Router();

const users_controller = require('../controllers/users_controller');

router.get('/login', users_controller.login);
router.post('/login', users_controller.processLoggin);
router.get('/logout', users_controller.logout);

router.get('/aboutme', users_controller.aboutMe);
module.exports = router;