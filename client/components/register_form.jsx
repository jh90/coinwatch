import React from 'react';

const propTypes = {
  handleSubmit: React.PropTypes.func,
};

export default class RegisterForm extends React.Component {
  constructor () {
    super();
    this.state = {
      user: '',
      password: '',
      name: '',
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
      <form onSubmit={this.handleSubmit} >
        <input type='text' name='name' placeholder='Name' onChange={this.handleChange} />
        <input type='email' name='user' placeholder='Email' onChange={this.handleChange} />
        <input type='password' name='password' placeholder='Password' onChange={this.handleChange} />
        <input type='submit' />
      </form>
    );
  }
}
