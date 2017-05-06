import React from 'react'
import AudioPlayer from '../AudioPlayer/AudioPlayer'
import TrackResult from '../TrackResult/TrackResult'
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
              <TrackResult 
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

export default TrackResults