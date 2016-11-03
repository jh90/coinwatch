const daemon = require('superagent');
const Coin = require('../models/coin.js');

class CryptoCompare {
  static allCoins () {
    return daemon.get("https://www.cryptocompare.com/api/data/coinlist/")
                 .then((response) => {
                    const coins = response.data;
                    const coinModels = [];
                    for (let c of coins) {
                      const clean = { sym: c.Name, name: c.CoinName };
                      const coin = new Coin(clean);
                      coinModels.push(coin);
                    }
                    return coinModels;
                 });
  }

  static spotData (coinFrom, coinTo) {
    return daemon.get(`https://www.cryptocompare.com/api/data/price?fsym=${coinFrom}&tsyms=${coinTo}`)
                 .then((response) => {
                    const cleanData = {
                      price: response.data[0].price,
                      volume24hFrom: response.data[0].Volume24Hours,
                      volume24hTo: response.data[0].VolumeTo24HoursTo,
                    };
                    return cleanData;
                 });
  }

  static getHistory (unit, length, interval, coinFrom, coinTo, exchange) {
    const baseURL = `https://www.cryptocompare.com/api/data/histo${unit}/?`;
    const aggregate = interval !== 1 ? `&aggregate=${interval}` : '';
    const e = !exchange ? 'e=CCCAGG' : `e=${exchange}`;
    return daemon.get(`${baseURL}${e}&fsym=${coinFrom}&tsym=${coinTo}&limit=${length}${aggregate}`)
                 .then((response) => {
                    const data = response.data;
                    const clean = data.map((snapshot) => {
                      const cleanSnapshot = {
                        closingPrice: snapshot.close,
                        volumeFrom: snapshot.volumefrom,
                        volumeTo: snapshot.volumeto,
                      };
                      return cleanSnapshot;
                    });
                    const cleanData = {
                      hasFirstValue: response.FirstValueInArray,
                      data: clean,
                    };
                    return cleanData;
                 });
  }
}

modules.export = CryptoCompare;
