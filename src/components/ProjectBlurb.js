import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

class ProjectBlurb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
      isHovering: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  handleClick(e) {
    this.setState({ isFlipped: !this.state.isFlipped });
  }
  handleMouseEnter(e) {
    this.setState({ isHovering: true });
  }
  handleMouseLeave(e) {
    this.setState({ isHovering: false });
  }
  render() {
    const visibility =
      this.state.isHovering && !this.state.isFlipped ? 'visible' : 'hidden';
    console.log(visibility);
    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        className="singleProject"
      >
        <span className="tooltiptext" style={{ visibility: visibility }}>
          Click for more
        </span>
        <Flippy
          flipOnClick={true}
          flipOnHover={false}
          flipDirection="horizontal"
        >
          <FrontSide onClick={this.handleClick} key="front">
            <img src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          </FrontSide>
          <BackSide onClick={this.handleClick} key="back">
            <a href={this.props.projectURL}>
              <h3>{this.props.title}</h3>
            </a>
            <p>{this.props.info}</p>
          </BackSide>
        </Flippy>
      </div>
    );
  }
}

export default ProjectBlurb;
