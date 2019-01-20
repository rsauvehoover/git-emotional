import React, { Component } from 'react';
import SubmitButton from '../components/submitButton.js';

class SubmitPage extends Component {
  render() {
    return (
      <div className="flex-container wrapper">
        <div className="wrapper">
          <div className="header">git Emotional</div>
          <input className="main" placeholder="Enter git repository URL" id="urlInput">
          </input>
					<SubmitButton></SubmitButton>
        </div>
      </div>
    );
  }
}

export default SubmitPage;
