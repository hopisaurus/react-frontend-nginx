import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi there. What are yoi doing?!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            goaway
          </a>
          <img src="/wavecheck.png" className="App-pic" alt="pic" />
        </header>
      </div>
    );
  }
}

export default App;
