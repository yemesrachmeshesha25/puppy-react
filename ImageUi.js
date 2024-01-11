import React, { Component } from 'react'

export default class ImageUI extends Component {
  render() {
    return (
      <div className={this.props.imageContainerClass}>
        {this.props.textContent && <p>{this.props.textContent}</p>}

        {this.props.imageSrc && <img src={this.props.imageSrc} />}
      </div>
    );
  }
}