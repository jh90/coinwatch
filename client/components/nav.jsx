import React from 'react';
import { withRouter, Link } from 'react-router';
import firebase from 'firebase';

const propTypes = {
  currentUser: React.PropTypes.object,
};

class Nav extends React.Component {
  constructor () {
    super();
    this.signOut = this.signOut.bind(this);
  }

  signOut () {
    firebase.auth().signOut().then(() => {
      this.props.router.push('/');
    });
  }

  render () {
    return (
      <div>
        <h1>NAV</h1>
        <h3>{`Welcome, ${this.props.currentUser.name}!`}</h3>
        <h3 onClick={this.signOut}>Sign Out</h3>
        {this.props.children}
      </div>
    );
  }
}

Nav.propTypes = propTypes;

export default withRouter(Nav);
