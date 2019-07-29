import React, { Component } from 'react';
import Navbar from './Navbar';
import Aboutme from './Aboutme';
import FullResumePage from './FullResumePage';
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
      </BrowserRouter>
    );
  }
}

export default App;
