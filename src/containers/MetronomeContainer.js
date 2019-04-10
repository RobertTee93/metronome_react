import React, { Component } from "react";

class MetronomeContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      playing: false,
      range: 100
    }
  }
  render(){
    return (
      <h1>I am Metronome</h1>
    )
  }
}

export default MetronomeContainer;
