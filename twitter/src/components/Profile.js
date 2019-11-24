import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from './Header';
import ConnectionsCounter from './ConnectionsCounter';
import Tweet from './Tweet';
import MainNav from './MainNav';
import AddTweetForm from './AddTweetForm';

class Profile extends Component {
  // Temporary hardcoded state until pulling from database
  state = {
    communityTweets: [
      {
        message: "Check out this stuff!",
        id: 1,
        userId: 2
      },
      {
        message: "Look what I had for lunch!",
        id: 2,
        userId: 2
      }
    ],

    userTweets: [
      {
        message: "This is my first tweet!",
        id: 1,
        userId: 1
      },
      {
        message: "This is my second tweet!",
        id: 2,
        userId: 1
      },
      {
        message: "This is my third tweet!",
        id: 3,
        userId: 1
      }
    ]
  };


  render() {
    return (
      <div class="App">
        <Header />
        <MainNav />
        <AddTweetForm />
        <div class="main">
          <div>
            <h2> My Tweets </h2>
          </div>
          <div>
            {/* User tweets */}
            {this.state.userTweets.map( (tweet, index) =>
              <Tweet
                message={tweet.message}
                id={tweet.id}
              />
            )}
          </div>
          <div>
            <h2>Tweetster Feed</h2>
          </div>
          <div>
            {/* Community tweets */}
            {this.state.communityTweets.map( (tweet, index) =>
              <Tweet
                message={tweet.message}
                id={tweet.id}
              />
            )}
          </div>


          <ConnectionsCounter
            following={3}
            followers={2}
          />
        </div>
      </div>
    );
  }
}

export default Profile;
