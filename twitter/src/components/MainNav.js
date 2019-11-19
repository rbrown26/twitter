import React, { Component } from 'react';
import { userService } from "../services/user.service";

class MainNav extends Component {
  render() {
    const user = localStorage.getItem('user');
    let welcomeLogin;
    let logoutRegister;

    if (user != null) {
      welcomeLogin = <span className="navbar-brand">Welcome back, { JSON.parse(user).firstName }!</span>
      logoutRegister = <a className="nav-link" href="/logout">Logout</a>;;
    } else {
      welcomeLogin = <a className="nav-link" href="/login">Login</a>;
      logoutRegister = <a className="nav-link" href="/register">Register</a>;
    }

    return (
      <nav className={this.props.navClass}>
          <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  {welcomeLogin}
              </li>
              <li className="nav-item">
                  {logoutRegister}
              </li>
          </ul>
      </nav>
    )
  }
}

export default MainNav;
