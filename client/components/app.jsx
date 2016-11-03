import React from 'react';
import daemon from 'superagent';

export default class App extends React.Component {
  constructor () {
    super();
    this.getCoinList = this.getCoinList.bind(this);
  }

  getCoinList () {
    daemon.get('/api/prices/index')
          .then((response) => {
            console.log(response);
          });
  }

  componentDidMount () {
    this.getCoinList();
  }

  render () {
    return (
      <div>
      </div>
    );
  }
}
