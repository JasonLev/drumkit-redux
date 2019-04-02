import React from 'react'
import { connect } from 'react-redux'
import Sound from './Sound'
import soundData from '../constants/sounds'

const mapStateToProps = state => ({
  soundID: state.nowPlaying
})

const NowPlaying = props => {
  const sound = soundData.sounds.find(sound => sound.id === props.soundID)
  return (
    <div className="nowPlaying">
      {props.soundID !== null && <Sound {...sound} />}
    </div>
  )
}

export default connect(
  mapStateToProps
)(NowPlaying)
