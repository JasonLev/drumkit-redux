import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setSound } from '../actions'

const mapDispatchToProps = {setSound};

const mapStateToProps = state => ({
  soundID: state.nowPlaying
})

class Sound extends Component {
  constructor(props){
    super(props)
    this.audioRef = React.createRef();
    this.playSound = this.playSound.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.playSound);
    this.audioRef.current.addEventListener('ended', this.reset);
  }
  
  componentWillUnmount() {
    window.removeEventListener('keydown', this.playSound);
    this.audioRef.current.removeEventListener('ended', this.reset);
  }
  
  playSound(event) {
    if (event.keyCode === this.props.keyCode || event.type === 'click') {
      this.props.setSound(this.props.id)
      this.audioRef.current.currentTime = 0
      this.audioRef.current.play()
    }
  }
  
  reset() {
    this.props.setSound(null)
  }

  render() {
    return (
      <div className={this.props.soundID === this.props.id ? "key playing" : "key"}
           onClick={this.playSound}>
        <kbd>{this.props.letter}</kbd>
        <span className="sound">{this.props.name}</span>
        <audio ref={this.audioRef} src={this.props.source}></audio>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sound)
