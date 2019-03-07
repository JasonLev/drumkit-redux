import React, { Component } from 'react';
import '../App.css';
import NowPlaying from '../components/NowPlaying'
import Sounds from '../components/Sounds'

class App extends Component {
  render() {
    return (
      <div>
        <NowPlaying />
        <Sounds />
      </div>
    );
  }
}

export default App;
