import React, { Component } from 'react';
import { Router, Switch, Route, Link } from 'react-router-dom'
import {createBrowserHistory} from 'history';
import Layout from './components/Layout';
import History from './components/Admin';
import Notfound from './components/Layout/NotFound';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history = {history}>
        <div className="App">
          <Switch>
            <Route exact path = "/" component = {Notfound}/>
            <Route exact path = "/:path" render = {({match}) => {
              return <Layout path = {match.params.path} />
            }}/>
            <Route exact path = "/admin/history" component = {History} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;