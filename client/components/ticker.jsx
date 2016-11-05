import React from 'react';
import daemon from 'superagent';

const propTypes = {
  getCoinList: React.PropTypes.func,
};

export default class Ticker extends React.Component {
  constructor () {
    super();
    this.state = {
      denomination: '',
      prices: [],
      displayedPrices: [],
    };
  }

  render () {
    return (
      <div>
      </div>
    );
  }
}

Ticker.propTypes = propTypes;
