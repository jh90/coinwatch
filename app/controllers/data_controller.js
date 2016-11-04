const cryptocompare = require('../services/cryptocompare_dao.js');

class DataController {
  static listAllCoins (req, res) {
    cryptocompare.all().then((response) => {
      res.status(200).json(response);
    });
  }

  static getSpotData (req, res) {
    const coinFrom = req.query.coinfrom;
    const coinTo = req.query.cointo;
    cryptocompare.spot(coinFrom, coinTo).then((response) => {
      res.status(200).json(response);
    });
  }

  static getHistory (req, res) {
    req.query['exchange'] = req.query['exchange'] || false;
    req.query['interval'] = req.query['interval'] || false;
    cryptocompare.history(req.query).then((response) => {
      res.status(200).json(response);
    });
  }
}

module.exports = DataController;
