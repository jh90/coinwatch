const express = require('express');
const VolumeController = require('../controllers/volume_controller.js');

const router = express.Router();

//get day volume by coins &opt exchange
router.get('/', VolumeController.getToday);
//get volume history by coins + period and interval &opt exchange
router.get('/histo', VolumeController.getHistory);

module.exports = router;
