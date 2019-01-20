import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class ReturnToSubmitButton extends Component {

  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <button className="button return-button dashboard-button" onClick={() => this.nextPath('/') }>Return</button>
    )
  }
}

export default withRouter(ReturnToSubmitButton);
