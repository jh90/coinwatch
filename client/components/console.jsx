import React from 'react';
import daemon from 'superagent';
import { Link } from 'react-router';
import firebase from '../../firebase.config.js';

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
