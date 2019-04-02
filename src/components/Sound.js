import React from 'react'
import { connect } from 'react-redux'
import { setSound } from '../actions'
// import soundFile from '../constants/${props.audioFile}'
// asdfasdfaf
const mapDispatchToProps = {setSound};

// let audio = new Audio(`../${props.audioFile}`)//<audio src={`../${props.audioFile}`}></audio>
// console.log(audio);
// audio.play()
// props.setSound(props.id)
const Sound = props => {
  return (
    <div className="key" onClick={ () => {props.setSound(props.id)} }>
      <kbd>{props.letter}</kbd>
      <span className="sound">{props.name}</span>
      <audio src={`../${props.audioFile}`}></audio>
    </div>
  )
}

export default connect(
  null,
  mapDispatchToProps
)(Sound)
