import React, { Component } from "react";
import MetronomeSlider from "../components/MetronomeSlider"

class MetronomeContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      playing: false,
      range: 100
    }
    this.handleRangeChange = this.handleRangeChange.bind(this)
  }

  handleRangeChange(range){
    const newRange = parseInt(range)
    this.setState({ range: newRange })
  }
  
  render(){
    return (
      <div className="metronome">
        <h1>I am Metronome</h1>
        <MetronomeSlider range={ this.state.range } rangeChange={ this.handleRangeChange }></MetronomeSlider>
      </div>
    )
  }
}

export default MetronomeContainer;
