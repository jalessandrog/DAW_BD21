const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs');

const dogs_controller = require('../controllers/dogs_controller')



router.get('/', dogs_controller.dogsList);

router.get('/add', dogs_controller.addDog);

router.get('/descriptions', dogs_controller.seeDescriptions);

router.post('/add', dogs_controller.saveDog);


module.exports = router;