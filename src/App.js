import React, { Component } from 'react';
import { Router, Switch, Route, Link } from 'react-router-dom'
import {createBrowserHistory} from 'history';
import Layout from './components/Layout';
import History from './components/Admin';
import resumeData from './resumeData';

const history = createBrowserHistory();

class App extends Component {
  render() {
    const InitialComp = () => {
      const ports = Object.values(resumeData).map((element, index) => {
        return (
          <Link key = {index} to = {element.path} style = {{color: 'white', fontSize: 30, display: 'flex', justifyContent: 'center', marginTop: 50}}>{element.name}</Link>
        );
      });

      return ports
    }

    return (
      <Router history = {history}>
        <div className="App">
          <Switch>
            <Route exact path = "/" component = {InitialComp}/>
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