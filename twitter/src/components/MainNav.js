import React, { Component } from 'react';
import { userService } from "../services/user.service";

class MainNav extends Component {

  constructor(props) {
    super(props);

    this.state = {
          loggedIn: true
    };

    this.handleClick = this.handleClick.bind(this);
    this.updateLoginState = this.updateLoginState.bind(this);
  }

  updateLoginState() {
    this.setState({ loggedIn: true });
  }

  handleClick(e) {
    e.preventDefault();
    console.log('in handleClick');
    userService.logout();
    this.setState({ loggedIn: false });
    document.location.href = "/logout";
  }

  render() {
    const { loggedIn } = this.state;
    const user = localStorage.getItem('user');
    let welcomeLogin;
    let logoutRegister;

    if (user != null) {

      welcomeLogin = <span className="navbar-brand">Welcome back, { JSON.parse(user).username }!</span>;
      logoutRegister = <a className="nav-link" href="/logout" onClick={ this.handleClick } >Logout</a>;
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
