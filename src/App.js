import React, { Component } from 'react';
import Layout from './components/Layout';
import resumeData from './resumeData';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout resumeData = {resumeData} />
      </div>
    );
  }
}

export default App;