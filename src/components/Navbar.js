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
      <div id="navBarContainer">
        <div
          id="navBar"
          onMouseEnter={() => this.setState({ hover: true })}
          onMouseLeave={() => this.setState({ hover: false })}
        >
          <div>
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
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
