const daemon = require('superagent');

const fiatList = [
    {sym: 'USD', name: 'Dollar'},
    {sym: 'EUR', name: 'Euro'},
    {sym: 'CNY', name: 'Yuan'},
    {sym: 'JPY', name: 'Yen'},
    {sym: 'GBP', name: 'Pound'},
    {sym: 'CHF', name: 'Swiss Franc'},
    {sym: 'ZAR', name: 'Rand'}
  ];

const getCoinList = () => {
    return daemon.get('/api/data/index')
          .then((response) => {
            const listArray = [];
            response.body.forEach((coin) => {
              if (coin.sort <= 50) {
                listArray.push(coin);
              }
            });
            fiatList.forEach((fiat) => {
              listArray.push(fiat);
            })
            return listArray;
          });
}

const CurrencyHelper = getCoinList();

module.exports = CurrencyHelper;
