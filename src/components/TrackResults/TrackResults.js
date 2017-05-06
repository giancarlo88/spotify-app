import React from 'react'
import PropTypes from 'prop-types'
import AudioPlayer from '../AudioPlayer/AudioPlayer'
import Track from '../Track/Track'
import FadeIn from '../../transitions/FadeIn/FadeInComponent'
import './TrackResults.css'

const TrackResults = props => {
  const { 
    handleTrackClick, 
    selectedTrackIndex, 
    tracks 
  } = props
  const selectedTrack = tracks && tracks[selectedTrackIndex]
  return (
    <div className='track-results'>
    <h2>Track Results</h2>
      <FadeIn>
        {selectedTrack && <AudioPlayer track={selectedTrack} /> }
      </FadeIn>
      <FadeIn>
        {tracks.length > 0 && tracks.map((track, index) => {
          const { name = '' } = track
            return (
              <Track 
                handleTrackClick={handleTrackClick}
                index={index}
                key={index}
                name={name}
                selected={index === selectedTrackIndex}
              />
            )
          })
        }
      </FadeIn>
    </div>
  )
}

TrackResults.propTypes = { 
  handleTrackClick: PropTypes.func.isRequired,
  selectedTrackIndex: PropTypes.number,
  tracks: PropTypes.array.isRequired
}

export default TrackResults