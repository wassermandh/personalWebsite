import React, { Component } from 'react';
import Navbar from './Navbar';
import Aboutme from './Aboutme';
import FullResumePage from './FullResumePage';
import ProjectsPage from './ProjectsPage';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Route path="/" exact component={Aboutme} />
        <Route path="/resume" exact component={FullResumePage} />
        <Route path="/projects" exact component={ProjectsPage} />
      </BrowserRouter>
    );
  }
}

export default App;
