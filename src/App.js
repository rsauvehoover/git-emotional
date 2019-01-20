import React, { Component } from 'react';
import './css/App.css';
import SubmitPage from './screens/submitPage.js';
import StatPage from './screens/statPage.js';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={300}
              classNames='fade'
            >
              <Switch location={location}>
                <Route path="/" component={SubmitPage} exact={true} />
                <Route path="/stat/" component={StatPage} exact={true} />
                <Redirect to="/" />
                <Route render={() => <div>Not Found</div>} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}/>
      </Router>
    );
  }
}

export default App;
