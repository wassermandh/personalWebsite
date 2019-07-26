import React, { Component } from 'react';
import Navbar from './Navbar';
import Aboutme from './Aboutme';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Aboutme />
      </div>
    );
  }
}

export default App;
