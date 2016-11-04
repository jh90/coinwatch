const express = require('express');
const dataController = require('../controllers/price_controller.js');

const router = express.Router();

//get all supported coins
router.get('/index', dataController.listAllCoins);
//get spot price and daily volume by coins
router.get('/', dataController.getSpotData);
//get price and volume history by coins + period and interval, and optionally exchange
router.get('/histo', dataController.getHistory);

module.exports = router;
