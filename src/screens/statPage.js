import React, { Component }  from 'react';
import Sentimood from '../util/sentiment/sentimood.js';
import LinePlot from '../util/line.js';
import ReturnToSubmitButton from '../components/returnToSubmitButton.js';
import { GithubHandler } from '../util/ghapi/githubHandler.js';


export default class StatPage extends Component {
  componentDidMount() {
    var sentimood = new Sentimood();
    // Example of a function using sentimood
    console.log(sentimood.analyze('this don\'t good'));

		var ghHandler = new GithubHandler("rsauvehoover/git-emotional");
		console.log("running a test");
		// ghHandler.parse_repo("https://github.com/rsauvehoover/git-emotional");
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
