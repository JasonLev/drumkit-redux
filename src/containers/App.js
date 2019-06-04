import React from 'react';
import '../App.css';
import NowPlaying from '../components/NowPlaying'
import Sounds from '../components/Sounds'

const App = () => (
  <div className="container">
    <NowPlaying />
    <Sounds />
  </div>
);

export default App;