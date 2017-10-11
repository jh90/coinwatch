import React from 'react';
import { Link } from 'react-router';

import Dashboard from './dashboard.jsx';
import Window from './window.jsx';
import Ticker from './ticker.jsx';

const propTypes = {
  currentUser: React.PropTypes.object,
};

export default class Console extends React.Component {
  constructor () {
    super();
    this.state = {
      graphData: {},
    };
    this.handleGraphParams = this.handleGraphParams.bind(this);
  }

  handleGraphParams (data) {
    this.setState({graphData: data,});
  }

  render () {
    return (
      <div>
        <Window graphParams={this.state.graphData} />
        <Dashboard handleGraphParams={this.handleGraphParams} />
      </div>
    );
  }
}

Console.propTypes = propTypes;
