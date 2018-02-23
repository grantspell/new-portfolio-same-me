import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// COMPONENTS
import Splash from './components/splash'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Splash} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
