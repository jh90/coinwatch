const express = require('express');
const PriceController = require('../controllers/price_controller.js');

const router = express.Router();

//get all supported coins
router.get('/index', PriceController.listAllCoins);
//get spot price by coins
router.get('/', PriceController.getSpotPrice);
//get price history by coins + period and interval, and optionally exchange
router.get('/histo', PriceController.getPriceHistory);

module.exports = router;
