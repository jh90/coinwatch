import React from 'react';
import daemon from 'superagent';

export default class App extends React.Component {
  constructor () {
    super();
    this.state = {
      currentUser: {},
      coinList: [],
    };
    this.setCurrentUser = this.setCurrentUser.bind(this);
  }

  setCurrentUser (userData) {
    this.setState({currentUser: userData});
  }

  render () {
    const childrenWithProps = React.cloneElement(this.props.children, {
      setCurrentUser: this.setCurrentUser,
      currentUser: this.state.currentUser,
    });
    return (
      <div className="app-container">
        {childrenWithProps}
      </div>
    );
  }
}
