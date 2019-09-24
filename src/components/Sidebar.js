import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div id="sidebar">
        <Link className="sidebarLink" target="blank" to="/resume">
          Resume
        </Link>
        <a
          className="sidebarLink"
          target="blank"
          href="http://www.github.com/wassermandh"
        >
          Github
        </a>
        <a className="sidebarLink" href="mailto:daniel.h.wasserman@gmail.com">
          Contact
        </a>
      </div>
    );
  }
}
export default Sidebar;
