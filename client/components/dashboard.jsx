import React from 'react';
import Modal from 'react-modal';
import daemon from 'superagent';

const propTypes = {
  currentUser: React.PropTypes.object,
  getHistory: React.PropTypes.func,
  getSpotData: React.PropTypes.func,
  getCoinList: React.PropTypes.func,
  openModal: React.PropTypes.func,
  closeModal: React.PropTypes.func,
};

export default class Dashboard extends React.Component {
  constructor () {
    super();
    this.state = {

    };
  }

  render () {
    return (
      <div>
      </div>
    );
  }
}

Dashboard.propTypes = propTypes;
