import React from "react";

const MetronomeSlider = (props) => {

  function handleChange(event){
    const newRange = event.target.value
    props.rangeChange(newRange)
  }

  return (
    <div className="slider">
      <div>
        <input onChange={ handleChange } onClick={ handleChange } type="range" min="60" max="160" defaultValue="100"/>
        <p>{ props.range } BPM </p>
      </div>
    </div>
  )
}

export default MetronomeSlider
