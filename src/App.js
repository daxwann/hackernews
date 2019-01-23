import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var helloWorld = "Welcome to the Road to learn React";
    var user = {
      firstName: "Bob",
      lastName: "Smith"
    }
    return (
      <div className="App">
        <h2>{helloWorld}, {user.firstName} {user.lastName}</h2>
      </div>
    );
  }
}

export default App;
