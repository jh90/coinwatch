import React from 'react';
import daemon from 'superagent';
import { Link } from 'react-router';

const propTypes = {
  currentUser: React.PropTypes.object,
};

export default class Posts extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div>
        POSTS
      </div>
    );
  }
}

Posts.propTypes = propTypes;
