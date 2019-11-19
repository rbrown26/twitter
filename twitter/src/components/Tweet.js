import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tweet extends Component {

  static propTypes = {
    message: PropTypes.string,
    id: PropTypes.number
  };

  render () {
    const { message, id } = this.props;
    return (
      <div>
         { message }
      </div>
    );
  }
}



export default Tweet;
