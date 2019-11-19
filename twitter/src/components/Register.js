import React, { Component } from 'react';
import Header from './Header';
import MainNav from './MainNav';

class Register extends Component {
  state = {
    firstName: '',
    lastName: '',
    zipCode: '',
    emailAddress: '',
    password: '',
    tacCheck: false,
    submitted: false,
    loading: false,
    error: ''
  };

  render() {
    const { firstName, lastName, zipCode, emailAddress, password, tacCheck, submitted, loading, error } = this.state;
    return (
      <div className="App-body">
        <Header />
        <MainNav navClass="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"/>
        <div className="container main">
          <h1>Register to get started!</h1>
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
