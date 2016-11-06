import React from 'react';
import daemon from 'superagent';

import ConversionsTab from './conversions_tab.jsx';

const propTypes = {
  getHistory: React.PropTypes.func,
  getSpotData: React.PropTypes.func,
};

export default class Dashboard extends React.Component {
  constructor () {
    super();
    this.state = {
      coins: [],
    };
  }

  getConversion(coinFrom, coinTo) {
    const data = this.props.getSpotData(coinFrom, coinTo);
    return data.price;
  }

  render () {
    return (
      <div>
        <h3>Dashboard</h3>
        <ConversionsTab getConversion={this.getConversion} />
      </div>
    );
  }
}

Dashboard.propTypes = propTypes;
