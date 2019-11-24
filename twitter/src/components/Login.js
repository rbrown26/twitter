import React, { Component } from 'react';
import logo from '../logo.svg';
import Header from './Header';
import MainNav from './MainNav';
import {userService} from "../services/user.service";

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
        username: "",
        password: ""
      };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('in handleSubmit');
    this.setState({ submitted: true });
    const { username, password, returnUrl } = this.state;
    console.log('updated state');
    console.log('username is ' + username);
    console.log('password is ' + password);
    if (!(username && password)) {
      return;
    }
    console.log('got what we need');
    this.setState({ loading: true });
    console.log('calling user service');
    userService.login(username, password)
        .then(
            user => {
              const { from } = this.props.location.state || { from: { pathname: "/profile" } };
              this.props.history.push(from);
            },
            error => {
              this.setState({ error, loading: false })
            }
        );

}


render() {
  const { username, password, submitted, loading, error } = this.state;
  return (
      <div class="App">
        <Header />
        <MainNav
          navClass="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"

        />
        <div className="container main">
          <h1 class="Register">Sign in</h1>
          <form name="loginForm" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <div className="row">
                <div className="col-md-5">
                  <label htmlFor="username">Username</label>
                  <input className="form-control" id="username" onChange={this.handleChange} placeholder="Username"/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" onChange={this.handleChange} placeholder="Password"/>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
            { error && <div className={'alert alert-danger'}>{error}</div> }
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
