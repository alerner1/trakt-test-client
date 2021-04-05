import React from 'react';
import './App.css';
import ShowCode from './ShowCode'
import {BrowserRouter as Router, Route, Switch, withRouter, Redirect} from 'react-router-dom'
import FetchTest from './FetchTest'

class App extends React.Component {
  state = {
    token: ''
  }

  storeToken = (token) => {
    this.setState({token: token}, () => console.log('set'))
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/authorize/" render={routerProps => <ShowCode storeToken={this.storeToken} routerProps={routerProps} token={this.state.token}/>} /> 
            <Route path="/fetchtest" render={routerProps => <FetchTest token={this.state.token} />} />
          </Switch>
        </div>
      </Router>
      
    );
  }
}

export default App