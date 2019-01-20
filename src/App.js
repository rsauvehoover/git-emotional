import React, { Component } from 'react';
import './css/App.css';
import './sentimood.js'
import './client.js';
import SubmitPage from './screens/submitPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SubmitPage></SubmitPage>
      </div>
    );
  }
}

export default App;
