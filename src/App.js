import React, { Component } from 'react';
import './App.css';
import MoodTracker from './components/MoodTracker'


class App extends Component {
  render() {
    // ...
    return (
      <div className="App">
        <h1>HAPPY</h1>
        <MoodTracker />
      </div>
    );
  }
}

export default App;
