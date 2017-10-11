import React from 'react';
import daemon from 'superagent';
import DataHelper from '../helpers/data_helper.js';
import CurrencyHelper from '../helpers/currency_helper.js';

import ConversionMenu from './conversion_menu.jsx';

export default class ConversionsTab extends React.Component {
  constructor () {
    super();
    this.state = {
      baseCoin: '',
      prices: {},
    };
    this.handleCoinSelections = this.handleCoinSelections.bind(this);
  }

  handleCoinSelections (coinFrom, coinsTo) {
    let queryString = '';
    coinsTo.forEach((coinTo) => {
      queryString = `${queryString}${coinTo},`;
    });
    queryString = queryString.slice(0, -1);
    DataHelper.getPrice(coinFrom, queryString).then((data) => {
      this.setState({prices: data,});
    });
    DataHelper.getSpotData(coinFrom, 'USD,EUR').then((data) => {console.log(data);});
  }

  render () {
    return (
      <div>
        <ConversionMenu handleSubmit={this.handleCoinSelections} />
        <h3>{this.state.baseCoin}</h3>
        {
          $.map(this.state.prices, (price, base) => {
            return (
              <div>
                <span>{base}</span>
                <span>{price}</span>
              </div>
            );
          })
        }
      </div>
    );
  }
}
