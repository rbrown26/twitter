import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ConnectionsCounter = ( { followers, following }) => {
  return (
    <table class="counter">
      <tbody>
        <tr>
          <td>Following:</td>
          <td>{following}</td>
        </tr>
        <tr>
          <td>Followers:</td>
          <td>{followers}</td>
        </tr>
      </tbody>
    </table>
  );
}

ConnectionsCounter.propTypes = {
  followers: PropTypes.string,
  following: PropTypes.string
}
export default ConnectionsCounter;
