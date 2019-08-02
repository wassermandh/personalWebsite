import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import InfoLinks from './Infolinks';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }
  render() {
    return (
      <div
        id="navBar"
        style={{
          backgroundColor: 'lightBlue',
          padding: '3px',
          maxHeight: '120px',
          overflow: 'hidden',
        }}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        <Link style={{ textDecoration: 'none' }} to="/">
          <h1
            style={{
              textAlign: 'center',
              margin: '1mm',
            }}
          >
            Daniel Wasserman
          </h1>
        </Link>
        <h3 style={{ textAlign: 'center', margin: '5px' }}>
          Software Engineer
        </h3>
        <InfoLinks hover={this.state.hover} />
      </div>
    );
  }
}

export default Navbar;
