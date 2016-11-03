import React from 'react';
import daemon from 'superagent';

export default class App extends React.Component {
  constructor () {
    super();
    this.getCoinList = this.getCoinList.bind(this);
  }

  getCoinList () {
    console.log('app method hit');
    daemon.get('/api/prices/index')
          .then((response) => {
            console.log(response);
          });
  }

  componentDidMount () {
    console.log('mounted');
    this.getCoinList();
  }

  render () {
    return (
      <div>
      </div>
    );
  }
}
