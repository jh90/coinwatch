import React from 'react';
import { withRouter } from 'react-router';
import daemon from 'superagent';
import firebase from '../../firebase.config.js';

import LoginForm from './login_form.jsx';
import RegisterForm from './register_form.jsx';

const propTypes = {
  setCurrentUser: React.PropTypes.func,
  currentUser: React.PropTypes.object,
};

class Landing extends React.Component {
  constructor () {
    super();
    this.state = {
      registered: true,
    };
    this.displayRegister = this.displayRegister.bind(this);
    this.displayLogin = this.displayLogin.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.logInUser = this.logInUser.bind(this);
  }

  displayRegister () {
    this.setState({
      registered: false,
    });
  }

  displayLogin () {
    this.setState({
      registered: true,
    });
  }

  registerUser (data) {
    const { user, name, password } = data;
    daemon.post('/api/users').send({ user, name, password })
          .then((response) => {
            this.props.router.push('/main/console');
          });
  }

  logInUser (data) {
    const { user, password } = data;
    firebase.auth().signInWithEmailAndPassword(user, password)
                   .then((user) => {
                      const userModel = {
                        name: user.displayName,
                        email: user.email,
                        uid: user.uid,
                      };
                      this.props.setCurrentUser(userModel);
                      this.props.router.push('/main/console');
                   });
  }

  render () {
    return (
      <div>
        <h1>Welcome to Coinwatch!</h1>
        <div id='auth-form'>
          <div id='auth-toggle'>
            <div className='auth-toggle-button' onClick={this.displayLogin}>
              Sign In</div>
            <div className='auth-toggle-button' onClick={this.displayRegister}>
              Sign Up</div>
          </div>
          {this.state.registered ? <LoginForm handleSubmit={this.logInUser} />
                                 : <RegisterForm handleSubmit={this.registerUser} />}
        </div>
      </div>
    );
  }
}

export default withRouter(Landing);
