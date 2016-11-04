import React from 'react';
import daemon from 'superagent';

export default class App extends React.Component {
  constructor () {
    super();
  }

  getCoinList () {
    daemon.get('/api/prices/index')
          .then((response) => {
            console.log(response);
          });
  }

  getSpotData (coinFrom, coinTo) {
    daemon.get(`/api/prices/?coinfrom=${coinFrom}&cointo=${coinTo}`)
          .then((response) => {
            console.log(response);
          });
  }

  getHistory (data) {
    console.log('app');
    const { unit, length, interval, coinFrom, coinTo, exchange } = data;
    const eQuery = exchange ? `&exchange=${exchange}` : '';
    const iQuery = interval ? `&interval=${interval}` : '';
    const queryString = `unit=${unit}&length=${length-1}&coinFrom=${coinFrom}&coinTo=${coinTo}${eQuery}${iQuery}`;
    daemon.get(`/api/prices/histo?${queryString}`).then((response) => {
      console.log(response);
    });
  }

  componentDidMount () {
    const data = {
      unit: 'hour',
      length: 24,
      coinFrom: 'BTC',
      coinTo: 'USD',
    };
    this.getHistory(data);
  }

  render () {
    return (
      <div>
      </div>
    );
  }
}
