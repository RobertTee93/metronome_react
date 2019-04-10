import React, { Component } from "react";
import MetronomeSlider from "../components/MetronomeSlider"
import beep from "../functions/Beep.js"

class MetronomeContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      playing: false,
      range: 100,
      intervalId: null
    }
    this.handleRangeChange = this.handleRangeChange.bind(this)
    this.beep = this.beep.bind(this)
    this.playSound = this.playSound.bind(this)
    this.stop = this.stop.bind(this)
  }


  handleRangeChange(range){
    const newRange = parseInt(range)
    this.setState({ range: newRange })
    this.playSound()
  }


  playSound(){
      if(this.state.intervalId){
        window.clearInterval(this.state.intervalId)
      }
      const interval = window.setInterval(this.beep, 1000*60/this.state.range)
      this.setState({ playing: true, intervalId: interval })
    }

  stop(){
    if (this.state.playing && this.state.playing){
      window.clearInterval(this.state.intervalId)
      this.setState( { playing: false } )
    }
  }

  beep() {
    beep()
}

  render(){
    return (
      <div className="metronome">
        <h1>I am Metronome</h1>
        <button onClick={ this.playSound }>Play</button>
        <button onClick={ this.stop }>Stop</button>
        <MetronomeSlider range={ this.state.range } rangeChange={ this.handleRangeChange }></MetronomeSlider>
      </div>
    )
  }
}

export default MetronomeContainer;
