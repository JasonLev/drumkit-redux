import React from 'react'
import soundData from '../constants/sounds'
import Sound from './Sound'
import BoomSound from '../sounds/boom.wav'
import ClapSound from '../sounds/clap.wav'
import HihatSound from '../sounds/hihat.wav'
import KickSound from '../sounds/kick.wav'
import OpenHatSound from '../sounds/openhat.wav'
import RideSound from '../sounds/ride.wav'
import SnareSound from '../sounds/snare.wav'
import TinkSound from '../sounds/tink.wav'
import TomSound from '../sounds/tom.wav'

const soundFiles = [ ClapSound,
                     HihatSound,
                     KickSound,
                     OpenHatSound,
                     BoomSound,
                     RideSound,
                     SnareSound,
                     TomSound,
                     TinkSound
                   ]

const Sounds = () => {
  const sounds = soundData.sounds.map((sound, i) => {
    return <Sound key={sound.id}
                  source={soundFiles[i]}
                  {...sound} />
  })
  return (
    <div className="keys">{sounds}</div>
  )
}

export default Sounds
