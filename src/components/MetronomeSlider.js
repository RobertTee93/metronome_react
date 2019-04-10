import React from "react";

const MetronomeSlider = (props) => {

  function handleChange(event){
    const newRange = event.target.value
    props.rangeChange(newRange)
  }

  return (
    <div className="slider">
      <div>
        <input onChange={ handleChange } type="range" min="40" max="160" defaultValue={ props.range }/>
        <p>{ props.range } BPM </p>
      </div>
    </div>
  )
}

export default MetronomeSlider
