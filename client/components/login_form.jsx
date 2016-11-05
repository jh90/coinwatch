import React from 'react';
import daemon from 'superagent';

const propTypes = {
  handleSubmit: React.PropTypes.func,
};

export default class LoginForm extends React.Component {
  constructor () {
    super();
    this.state = {
      user: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (e) {
    e.preventDefault();
    const stateClone = this.state;
    stateClone[e.target.name] = e.target.value;
    this.setState(stateClone);
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='email' name='user' placeholder='Email' onChange={this.handleChange} />
        <input type='password' name='password' placeholder='Password' onChange={this.handleChange} />
        <input type='submit' />
      </form>
    );
  }
}

LoginForm.propTypes = propTypes;
