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
        <a className="sidebarLink" href="/resume">
          Github
        </a>
        <a className="sidebarLink" href="/resume">
          Contact
        </a>
      </div>
    );
  }
}
export default Sidebar;
