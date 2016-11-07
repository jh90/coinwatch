const daemon = require('superagent');

const getCoinList = () => {
    daemon.get('/api/data/index')
          .then((response) => {
            const listArray = [];
            response.body.forEach((coin) => {
              if (coin.sort <= 50) {
                listArray.push(coin);
              }
            });
            return listArray;
          });
}

const allCoins = getCoinList().sort((a, b) => {
  return a.sort - b.sort;
});

const CurrencyHelper = {
  CoinList: allCoins,
  FiatList: [
    'USD',
    'EUR',
    'CNY',
    'JPY',
    'GBP',
    'CHF',
    'ZAR'
  ],
};

module.exports = CurrencyHelper;
