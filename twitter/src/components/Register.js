import React, { Component } from 'react';
import Header from './Header';
import MainNav from './MainNav';
import {userService} from "../services/user.service";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      tacCheck: false,
      submitted: false,
      loading: false,
      error: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password, tacCheck } = this.state;

    if (!(username && password && tacCheck)) {
      return;
    }

    this.setState({ loading: true });
    userService.registerUser(username, password)
        .then(
            user => {
              const { from } = this.props.location.state || { from: { pathname: "/" } };
              this.props.history.push(from);
            },
            error => {
              this.setState({ error, loading: false })
            }
        );
  }

  render() {
    const { username, password, tacCheck, submitted, loading, error } = this.state;
    return (
      <div class="App">
        <Header />
        <MainNav navClass="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"/>
        <div className="container main">
          <h1 class="Register">Register to get started!</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <div className="row">
                <div className="col-sm">
                  <label htmlFor="username">Username</label>
                  <input className="form-control" id="username" onChange={this.handleChange}/>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col-sm">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" onChange={this.handleChange}/>
                </div>
                <div className="col-sm">
                  <label htmlFor="password">Confirm Password</label>
                  <input type="password" className="form-control" id="confirmPassword" onChange={this.handleChange}/>
                </div>
              </div>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="tacCheck" onChange={this.handleChange}/>
              <label className="form-check-label" htmlFor="tacCheck">I agree to the terms and
                conditions</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            { error && <div className={'alert alert-danger'}>{error}</div> }
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
