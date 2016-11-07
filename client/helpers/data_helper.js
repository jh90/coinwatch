const daemon = require('superagent');

class DataHelper {
  static getPrice (coinFrom, coinsTo) {
    return daemon.get(`https://min-api.cryptocompare.com/data/price?fsym=${coinFrom}&tsyms=${coinsTo}`)
                 .then((response) => {
                    return response.body;
           });
  }

  static getSpotData (coinFrom, coinsTo) {
    return daemon.get(`/api/data/?coinfrom=${coinFrom}&cointo=${coinsTo}`)
                 .then((response) => {
                    return response.body;
           });
  }

  static getHistory (data) {
    const { unit, length, interval, coinFrom, coinTo, exchange } = data;
    const eQuery = exchange ? `&exchange=${exchange}` : '';
    const iQuery = interval ? `&interval=${interval}` : '';
    const queryString = `unit=${unit}&length=${length-1}&coinFrom=${coinFrom}&coinTo=${coinTo}${eQuery}${iQuery}`;
    return daemon.get(`/api/data/histo?${queryString}`).then((response) => {
      return response;
    });
  }
}

module.exports = DataHelper;
