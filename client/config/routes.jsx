import React from 'react';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';

import App from '../components/app.jsx';

export default class Routes extends React.Component {
  render () {
    return (
      <Router history={hashHistory} >
        <Route path='/' component={App} />
      </Router>
    );
  }
}
