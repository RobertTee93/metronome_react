import React, { Component } from "react";
import MetronomeSlider from "../components/MetronomeSlider"
import Metronome from "../components/Metronome"
import beep from "../functions/Beep.js"
import "./MetronomeContainer.css"

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
      const el = document.querySelector(".m-container .m-stick")
      el.style.cssText += `animation: metronome ${120/this.state.range}s ease-in-out infinite;`
      this.setState({ playing: true, intervalId: interval })
    }

  stop(){
    if (this.state.playing && this.state.playing){
      window.clearInterval(this.state.intervalId)
      const el = document.querySelector(".m-container .m-stick")
      el.style.cssText += `animation: metronome ${0}s ease-in-out infinite;`
      this.setState( { playing: false } )
    }
  }

  beep() {
    beep()
}

  render(){
    return (
      <div className="metronome-container">
        <Metronome></Metronome>
        <div className="controls">
          <div onClick={ this.playSound }>
            <img src="https://www.pngrepo.com/png/157836/170/play-button.png" alt="play"/>
          </div>
          <div onClick={ this.stop }>
            <img src="https://www.pinclipart.com/picdir/big/31-315907_red-stop-button-plain-icon-svg-clip-arts.png" alt="stop"/>
          </div>
        </div>
        <MetronomeSlider range={ this.state.range } rangeChange={ this.handleRangeChange }></MetronomeSlider>

      </div>
    )
  }
}

export default MetronomeContainer;
