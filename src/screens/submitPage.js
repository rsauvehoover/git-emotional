import React, { Component } from 'react';

import { connect } from 'react-redux';
import { updateUrl, ACTIONS } from '../redux/actions/actions.js';

class SubmitPage extends Component {

  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  nextPath(path) {
    this.props.history.push(path);
    this.props.updateUrl(ACTIONS.UPDATE_URL, this.state.input);
    this.setState({ input : "" });
  }

  render() {
    return (
      <div className="flex-container wrapper">
        <div className="wrapper">
          <div className="header">git Emotional</div>
          <div>
            <input className="main input" placeholder="Enter git repository URL"
              onChange={e => this.updateInput(e.target.value)}
              value={this.state.input} 
            />
            <button className="button sub-button" onClick={() => this.nextPath('/stat') }>Submit</button>
          </div>
         
        </div>
      </div>
    );
  }
}

export default connect(null, { updateUrl })(SubmitPage)

