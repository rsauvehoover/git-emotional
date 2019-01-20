import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="flex-container wrapper">
          <div class="wrapper">
            <div class="header">git Emotional</div>
            <input class="main" placeholder="Enter git repository URL" id="urlInput">
            </input>
            <button class="button sub-button" id="submitButton">
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
