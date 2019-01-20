import React, { Component } from 'react';

export default class SubmitPage extends Component {
  render() {
    return (
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
    );
  }
}
