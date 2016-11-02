import React from 'react';
import daemon from 'superagent';

export default class App extends React.Component {
  constructor () {
    super();
    this.getCoinList = this.getCoinList.bind(this);
  }

  getCoinList () {
    daemon.get('https://www.cryptocompare.com/api/data/histominute/?e=CCCAGG&fsym=BTC&limit=93&tsym=USD')
          .then((response) => {
            console.log(response);
          });
  }

  componentDidMount () {
    this.getCoinList();
  }

  render () {
    return (
      <div>
      </div>
    );
  }
}
