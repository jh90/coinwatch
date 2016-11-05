import React from 'react';
import { Router, hashHistory, Route, IndexRedirect } from 'react-router';
import firebase from '../../firebase.config.js';

import App from '../components/app.jsx';
import Landing from '../components/landing.jsx';
import Nav from '../components/nav.jsx';
import Console from '../components/console.jsx';
import Posts from '../components/posts.jsx';

const requireAuth = () => {
  if (!firebase.auth().currentUser) {
    replace('/welcome');
  }
}

export default class Routes extends React.Component {
  render () {
    return (
      <Router history={hashHistory} >
        <Route path='/' component={App} >
          <IndexRedirect to='landing' />
          <Route path='landing' component={Landing} />
          <Route path='main' component={Nav} >
            <Route path='console' component={Console} />
            <Route path='community' component={Posts} />
          </Route>
        </Route>
      </Router>
    );
  }
}
