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

  componentDidMount () {
    this.getSpotData('BTC', 'USD');
  }

  render () {
    return (
      <div>
      </div>
    );
  }
}
