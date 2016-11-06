import React from 'react';

import ConversionMenu from './conversion_menu.jsx';

const propTypes = {
  getConversion: React.PropTypes.func,
};

export default class ConversionsTab extends React.Component {
  constructor () {
    super();
    this.state = {
      coinFrom: '',
      prices: [],
    };
  }

  handleCoinSelections (coinFrom, coinsTo) {
    const conversions = [];
    coinsTo.forEach((coinTo) => {
      const price = this.props.getConversion(coinFrom, coinTo);
      conversions.push({coinTo: price});
    });
    this.setState({prices: conversions});
  }

  render () {
    return (
      <div>
        <ConversionMenu handleSubmit={this.handleCoinSelections} />
        <h3>{this.state.coinFrom}</h3>
        {
          this.state.prices.map((price) => {
            const sym = Object.keys(price)[0];
            const conversion = price[sym];
            return (
              <div>
                <span>{sym}</span>
                <span>{conversion}</span>
              </div>
            );
          })
        }
      </div>
    );
  }
}

ConversionsTab.propTypes = propTypes;
