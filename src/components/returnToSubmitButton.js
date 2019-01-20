import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class ReturnToSubmitButton extends Component {

  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <button className="button return-button" onClick={() => this.nextPath('/') }>GoBack</button>
    )
  }
}

export default withRouter(ReturnToSubmitButton);
