const express = require('express');
const dataController = require('../controllers/data_controller.js');

const router = express.Router();

//get all supported coins
router.get('/index', dataController.listAllCoins);
//get spot price, daily volumes by conversion
router.get('/', dataController.getSpotData);
//get price and volume history by conversion, sample frequency, exchange
router.get('/histo', dataController.getHistory);

module.exports = router;
