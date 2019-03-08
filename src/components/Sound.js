import React from 'react'

const Sound = props => {

  return (
    <div className="key" >
      <kbd>{props.letter}</kbd>
      <span className="sound">{props.name}</span>
      <audio src={`../constants/${props.audioFile}`}></audio>
    </div>
  )
}

export default Sound
