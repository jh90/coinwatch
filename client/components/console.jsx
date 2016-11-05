import React from 'react';
import Modal from 'react-modal';
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

  render () {
    return (
      <div>
        <h1>CONSOLE</h1>
      </div>
    );
  }
}

Console.propTypes = propTypes;
