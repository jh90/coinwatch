const cryptocompare = require('../services/cryptocompare_dao.js');

class PriceController {
  static listAllCoins (req, res) {
    cryptocompare.allCoins().then((coins) => {
      res.status(200).json(coins);
    });
  }

  static getSpotPrice (req, res) {

  }

  static getPriceHistory (req, res) {

  }
}

module.exports = PriceController;
