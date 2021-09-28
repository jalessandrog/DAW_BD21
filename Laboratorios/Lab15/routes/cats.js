const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs');

const cats_controller = require('../controllers/cats_controller')


router.get('/', cats_controller.catsList);

router.get('/add', cats_controller.addcat);

router.get('/descriptions', cats_controller.seeDescriptions);

router.post('/add', cats_controller.saveCat);


module.exports = router;