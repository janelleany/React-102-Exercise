import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const sups = [
  {author: "countrymouse", body: "Corvids are cool. Fight the power.", timestamp: new Date()},
  {author: "spotsgiraffe", body: "Geeking out", timestamp: new Date()},
  {author: "janelleany", body: "I'm hungry", timestamp: new Date()},
  {author: "nybblr", body: "Destroy all classes", timestamp: new Date()}
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
