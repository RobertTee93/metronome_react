import React from "react";
import "./Metronome.css"

const Metronome = () => {
  return (
    <div className="m-container">
      <div className="m-body">
        <div className="m-base">
          <div className="m-tempo"></div>
          </div>
        </div>
      <div className="m-stick"></div>
    </div>
  )
}

export default Metronome;
