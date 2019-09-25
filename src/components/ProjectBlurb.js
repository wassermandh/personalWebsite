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
            <img className="projectPic" src={this.props.img} />
          </FrontSide>
          <BackSide
            style={{ overflow: 'scroll' }}
            onClick={this.handleClick}
            key="back"
          >
            <h3>{this.props.title}</h3>
            <p>{this.props.info}</p>
            <div className="projectLinksBox">
              <div>
                <a
                  className="projectLink"
                  target="blank"
                  href={this.props.deployedURL}
                >
                  Deployed Link
                </a>
              </div>

              <a
                className="projectLink"
                target="blank"
                href={this.props.githubURL}
              >
                Github Link
              </a>
            </div>
            <div className="moreInfoPics">
              {this.props.examplePics.map((pic, idx) => {
                return (
                  <img
                    key={idx.toString()}
                    src={pic}
                    className="innerExamplePics"
                  />
                );
              })}
            </div>
          </BackSide>
        </Flippy>
      </div>
    );
  }
}

export default ProjectBlurb;
