import React, { Component } from 'react';
import Navbar from './Navbar';
import Aboutme from './Aboutme';
import FullResumePage from './FullResumePage';
import ProjectsPage from './ProjectsPage';
import ExperiencePage from './ExperiencePage';
import Footer from './Footer';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Aboutme />
        </div>
        <Route path="/resume" exact component={FullResumePage} />
        <Route path="/projects" exact component={ProjectsPage} />
        <Route path="/experience" exact component={ExperiencePage} />
      </BrowserRouter>
    );
  }
}

export default App;
