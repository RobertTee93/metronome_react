import React, { Component } from 'react';
import MetronomeContainer from "./containers/MetronomeContainer"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <MetronomeContainer></MetronomeContainer>
      </div>
    );
  }
}

export default App;
