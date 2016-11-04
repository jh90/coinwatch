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
    req.query['exchange'] = req.query['exchange'] || false;
    req.query['interval'] = req.query['interval'] || false;
    cryptocompare.getHistory(req.query).then((response) => {
      res.status(200).json(response);
    });
  }
}

module.exports = PriceController;
