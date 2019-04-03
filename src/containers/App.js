import React, { Component } from 'react';
import '../App.css';
import NowPlaying from '../components/NowPlaying'
import Sounds from '../components/Sounds'
import { connect } from 'react-redux'
import { setSound } from '../actions'
import soundData from '../constants/sounds'

const mapDispatchToProps = {setSound};

class App extends Component {

  componentDidMount(){
    window.addEventListener('keydown', (ev) => {
      const sound = soundData.sounds.find(sound => sound.keyCode === ev.keyCode)
      if (!sound) return;
      const soundID = sound.id;
      this.props.setSound(soundID);
    })
  }

  render() {
    return (
      <div className="container">
        <NowPlaying />
        <Sounds />
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App)
