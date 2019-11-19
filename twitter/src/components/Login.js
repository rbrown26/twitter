import React, { Component } from 'react';
import logo from '../logo.svg';
import Header from './Header';
import MainNav from './MainNav';

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleValueChange = (e) => {
    this.setState({ value: e.target.value });
  }


  render() {
    return (
      <div>
        <Header />
        <MainNav />

        <form>
          <input
            className="Login"
            type="text"
            value={this.state.value}
            onChange={this.handleValueChange}
            placeholder="Username"
          />

          <input
            className="Login"
            type="text"
            value={this.state.value}
            onChange={this.handleValueChange}
            placeholder="Password"
          />

          <input
            className="LoginSubmit"
            type="submit"
            value="Login"
          />
        </form>
      </div>
    );
  }
}

export default Login;
