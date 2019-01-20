import React, { Component }  from 'react';
import LinePlot from '../util/line.js';
import ReturnToSubmitButton from '../components/returnToSubmitButton.js';
import { GithubHandler } from '../util/ghapi/githubHandler.js';

import { connect } from 'react-redux';
import { updateRawData, ACTIONS } from '../redux/actions/actions.js';

class StatPage extends Component {
  componentDidMount() {
		var ghHandler = new GithubHandler();
    if (!(this.props.gh_url === '')) {
      ghHandler.parse_repo(this.props.gh_url);
      this.props.updateRawData(ACTIONS.UPDATE_RAW_DATA, ghHandler.commits);
    }
  }

  render() {
    return (
      <div>
        <ReturnToSubmitButton></ReturnToSubmitButton>
        <div>
          <LinePlot />
        </div>
      </div>
      
    );
  }
}

const mapStateToProps = state => {
  const gh_url = state.updateGhUrl;
  return { gh_url }
};

export default connect(mapStateToProps, { updateRawData } )(StatPage)

