import React from 'react';
import { Link } from 'react-router';
import daemon from 'superagent';
import firebase from '../../firebase.config.js';

import Dashboard from './dashboard.jsx';
import Window from './window.jsx';
import Ticker from './ticker.jsx';

const propTypes = {
  currentUser: React.PropTypes.object,
};

export default class Console extends React.Component {
  constructor () {
    super();
  }

  getSpotData (coinFrom, coinTo) {
    daemon.get(`/api/data/?coinfrom=${coinFrom}&cointo=${coinTo}`)
          .then((response) => {
            return response;
          });
  }

  getHistory (data) {
    const { unit, length, interval, coinFrom, coinTo, exchange } = data;
    const eQuery = exchange ? `&exchange=${exchange}` : '';
    const iQuery = interval ? `&interval=${interval}` : '';
    const queryString = `unit=${unit}&length=${length-1}&coinFrom=${coinFrom}&coinTo=${coinTo}${eQuery}${iQuery}`;
    daemon.get(`/api/data/histo?${queryString}`).then((response) => {
      return response;
    });
  }

  render () {
    return (
      <div>
        <h1>CONSOLE</h1>
        <Dashboard getSpotData={this.getSpotData}
                   getHistory={this.getHistory} />
      </div>
    );
  }
}

Console.propTypes = propTypes;
