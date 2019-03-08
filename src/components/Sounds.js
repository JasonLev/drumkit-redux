import React from 'react'
import soundData from '../constants/sounds'
import Sound from './Sound'

const Sounds = () => {
  const sounds = soundData.sounds.map(sound => {
    return <Sound key={sound.id}
              {...sound} />
  })
  return (
    <div className="keys">{sounds}</div>
  )
}

export default Sounds
