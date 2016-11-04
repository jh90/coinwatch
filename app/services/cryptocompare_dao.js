const daemon = require('superagent');
const Coin = require('../models/coin.js');

class CryptoCompare {
  static allCoins () {
    return daemon.get("https://www.cryptocompare.com/api/data/coinlist/")
                 .then((response) => {
                    const parsedResponse = JSON.parse(response.res.text);
                    const coins = parsedResponse.Data;
                    const coinModels = [];
                    for (let sym in coins) {
                      const coin = coins[sym];
                      const coinModel = new Coin(sym, coin.CoinName);
                      coinModels.push(coinModel);
                    }
                    return coinModels;
                 });
  }

  static spotData (coinFrom, coinTo) {
    return daemon.get(`https://www.cryptocompare.com/api/data/price?fsym=${coinFrom}&tsyms=${coinTo}`)
                 .then((response) => {
                    console.log(response.res.body, 'body');
                    const parsedResponse = JSON.parse(response.res.text);
                    const cleanData = {
                      price: parsedResponse.Data[0].Price,
                      volume24hFrom: parsedResponse.Data[0].Volume24Hours,
                      volume24hTo: parsedResponse.Data[0].VolumeTo24HoursTo,
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

module.exports = CryptoCompare;
