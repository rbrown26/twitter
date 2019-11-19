import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Header from './components/Header';
import ConnectionsCounter from './components/ConnectionsCounter';
import Tweet from './components/Tweet';
import AddTweetForm from './components/AddTweetForm';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Route exact path="/" component={ Login } />
          <Route path="/register" component={ Register } />
          <Route path="/login" component={ Login } />
          <Route path="/logout" component={ Login } />
          <Route path="/profile" component={ Profile } />
      </BrowserRouter>
    );
  }
}

export default App;
