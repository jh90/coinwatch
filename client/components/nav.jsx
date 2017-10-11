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
    const childrenWithProps = React.cloneElement(this.props.children, {
      currentUser: this.props.currentUser,
    });
    return (
      <div>
        <div id='header'>
          <p className='header name'>{this.props.currentUser.name}</p>
          <p className='header logout' onClick={this.signOut}>Sign Out</p>
        </div>
        {childrenWithProps}
      </div>
    );
  }
}

Nav.propTypes = propTypes;

export default withRouter(Nav);
