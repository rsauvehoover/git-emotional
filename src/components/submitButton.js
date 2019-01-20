import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class SubmitButton extends Component {

  nextPath(path) {
    this.props.history.push(path);
  }

	render() {
		return (
			<button className="button sub-button" onClick={() => this.nextPath('/stat') }>Submit</button>
		)
	}
}

export default withRouter(SubmitButton);
