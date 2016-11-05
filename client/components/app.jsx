import React from 'react';
import daemon from 'superagent';

export default class App extends React.Component {
  constructor () {
    super();
    this.state = {
      currentUser: {},
    };
    this.setCurrentUser = this.setCurrentUser.bind(this);
  }

  setCurrentUser (userData) {
    this.setState({currentUser: userData});
  }

  getCoinList () {
    daemon.get('/api/data/index')
          .then((response) => {
            console.log(response);
          });
  }

  getSpotData (coinFrom, coinTo) {
    daemon.get(`/api/data/?coinfrom=${coinFrom}&cointo=${coinTo}`)
          .then((response) => {
            console.log(response);
          });
  }

  getHistory (data) {
    const { unit, length, interval, coinFrom, coinTo, exchange } = data;
    const eQuery = exchange ? `&exchange=${exchange}` : '';
    const iQuery = interval ? `&interval=${interval}` : '';
    const queryString = `unit=${unit}&length=${length-1}&coinFrom=${coinFrom}&coinTo=${coinTo}${eQuery}${iQuery}`;
    daemon.get(`/api/data/histo?${queryString}`).then((response) => {
      console.log(response);
    });
  }

  render () {
    const childrenWithProps = React.cloneElement(this.props.children, {
      setCurrentUser: this.setCurrentUser,
      currentUser: this.state.currentUser,
    });
    return (
      <div className="app-container">
        {childrenWithProps}
      </div>
    );
  }
}
