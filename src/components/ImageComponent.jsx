import React from "react";

class ImageComponent extends React.Component {
  render() {
    return (
        <img src={this.props.src} alt={this.props.alt}  style={{width: '100%'}}/>
    );
  }
}

export default ImageComponent;