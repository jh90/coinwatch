import React from 'react';
import daemon from 'superagent';

import ConversionsTab from './conversions_tab.jsx';

export default class Dashboard extends React.Component {
  constructor () {
    super();
    this.state = {
      coins: [],
    };
  }

  render () {
    return (
      <div>
        <h3>Dashboard</h3>
        <ConversionsTab getSpotData={this.getSpotData} />
      </div>
    );
  }
}

Dashboard.propTypes = propTypes;
