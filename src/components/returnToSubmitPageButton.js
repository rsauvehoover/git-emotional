import React, { Component } from 'react';
import {browserHistory} from 'react-router';

export default class SubmitButton extends Component {
	onClick(){
	}

  render() {
    return (
      <button className="button sub-button" onclick={this.onClick()}>Submit</button>
    )
  }
}
