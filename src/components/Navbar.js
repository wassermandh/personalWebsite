import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import InfoLinks from './Infolinks';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: true,
    };
  }
  render() {
    return (
      <div
        style={{
          backgroundColor: 'lightBlue',
          padding: '3px',
          maxHeight: '120px',
          overflow: 'hidden',
        }}
        onMouseEnter={() => this.setState({ hover: true })}
        // onMouseLeave={() => this.setState({ hover: false })}
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
        <h3 style={{ textAlign: 'center', margin: '1mm' }}>
          Software Engineer
        </h3>
        {this.state.hover ? <InfoLinks /> : ''}
      </div>
    );
  }
}

export default Navbar;
