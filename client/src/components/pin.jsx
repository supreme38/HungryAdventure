import React, { Component } from 'react';

class Pin extends Component {
  constructor(props){
    super(props)
  }

  render(){
    console.log(this.props)
    return(
      <div>{this.props.text}</div>
    )
  }
}

export default Pin;