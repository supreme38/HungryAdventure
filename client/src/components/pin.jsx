import React, { Component } from 'react';

class Pin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pin">{this.props.text}</div>
    );
  }
}

export default Pin;
