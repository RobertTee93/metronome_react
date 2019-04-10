import React from "react";

const MetronomeSlider = (props) => {

  function handleChange(event){
    const newRange = event.target.value
    props.rangeChange(newRange)
  }

  return (
    <div className="slider">
      <h1>I am Slider</h1>
      <div>
        <input onInput={ handleChange } type="range" min="40" max="160" defaultValue={ props.range }/>
        <label htmlFor="volume">{ props.range } BPM </label>
      </div>
    </div>
  )
}

export default MetronomeSlider
