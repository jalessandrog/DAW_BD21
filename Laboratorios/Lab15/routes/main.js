const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs');

const main_controller = require('../controllers/main_controller')


router.get('/', main_controller.index);

router.get('/storyTime', main_controller.story);

router.post('/storyTime', main_controller.saveStory);

router.get('/memories', main_controller.memories);

router.get('/aboutme', main_controller.aboutMe);

module.exports = router;