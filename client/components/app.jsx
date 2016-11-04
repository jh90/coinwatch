import React from 'react';
import daemon from 'superagent';

export default class App extends React.Component {
  constructor () {
    super();
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

  registerUser ({user, name, password}) {
    daemon.post('/api/users').send({user, name, password})
          .then((response) => {
            console.log(response);
          });
  }

  logInUser (data) {
    const { user, password } = data;
    daemon.post('/api/users/login').send({user, password})
          .then((response) => {
            console.log(response);
          });
  }

  render () {
    return (
      <div>
      </div>
    );
  }
}
