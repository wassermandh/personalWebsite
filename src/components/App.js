import React, { Component } from 'react';
import Navbar from './Navbar';
import Aboutme from './Aboutme';
import Resume from './Resume';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Route path="/" exact component={Aboutme} />
        <Route path="/resume" exact component={Resume} />
      </BrowserRouter>
    );
  }
}

export default App;
