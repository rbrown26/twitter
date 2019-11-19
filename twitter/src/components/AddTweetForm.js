import React, { Component } from 'react';

class AddTweetForm extends Component {

  state = {
    value: ''
  };

  handleValueChange = (e) => {
    this.setState({ value: e.target.value });
  }

  render () {
    return (
      <form>
        <input
          type="textArea"
          value={this.state.value}
          onChange={this.handleValueChange}
          placeholder="What's on your mind?"
        />

        <input
          className="submit"
          type="submit"
          value="Add Tweet"
        />
      </form>
    );
  }
}

export default AddTweetForm;
