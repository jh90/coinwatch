const cryptocompare = require('../services/cryptocompare_dao.js');

class PriceController {
  static listAllCoins (req, res) {
    cryptocompare.allCoins().then((coins) => {
      res.status(200).json(coins);
    });
  }

  static getSpotPrice (req, res) {
    const coinFrom = req.query.coinfrom;
    const coinTo = req.query.cointo;
    cryptocompare.spotData(coinFrom, coinTo).then((response) => {
      console.log(response);
      res.status(200).json(response);
    });
  }

  static getPriceHistory (req, res) {

  }
}

module.exports = PriceController;
