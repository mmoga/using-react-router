import React, {
  Component
} from 'react';
import './App.css';
import { 
  Route, 
  withRouter, 
  Switch, 
  Redirect 
} from 'react-router-dom';

import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import SignupPage from './pages/Signup';

import Navigation from './components/Navigation';

class App extends Component {
  render() {
    const { match, location, history } = this.props;
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Redirect from='/login/*' to='/login' />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/signup' component={SignupPage} />
          <Route path='/signup/:coupon' component={SignupPage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);