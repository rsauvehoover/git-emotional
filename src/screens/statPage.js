import React, { Component }  from 'react';
import LinePlot from '../util/line.js';
import ReturnToSubmitButton from '../components/returnToSubmitButton.js';
import { GithubHandler } from '../util/ghapi/githubHandler.js';

import { connect } from 'react-redux';
import { updateRawData, ACTIONS } from '../redux/actions/actions.js';

class StatPage extends Component {
  componentDidMount() {
    this.continueFlag = 0;
    var ghHandler = new GithubHandler();
    if (!(this.props.gh_url === '')) {
      ghHandler.parse_repo(this.props.gh_url);
      this.props.updateRawData(ACTIONS.UPDATE_RAW_DATA, ghHandler.commits);
      this.commits = ghHandler.commits;
      this.continueFlag = 1;
    }
    else {
      this.props.history.push('/');
    }
  }

  render() {
    if(this.continueFlag !== 0 && this.commits) {
      return (
        <div className="flex-container wrapper">
          <div>
            <div clssName="plot">
              <LinePlot gh_url= { this.props.gh_url } commits = { this.commits }/>
            </div>
            <ReturnToSubmitButton></ReturnToSubmitButton>
            <button className="button dashboard-button"
              onClick={() => {}}
              >Change View
            </button>
          </div>
        </div>
      );
    }
    else {
      return (
        <div>
        <div>
        </div>
        <ReturnToSubmitButton></ReturnToSubmitButton>
        <button className="button dashboard-button"
        onClick={() => {}}
        >Change View
        </button>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  const gh_url = state.updateGhUrl;
  return { gh_url }
};


export default connect(mapStateToProps, { updateRawData } )(StatPage)

