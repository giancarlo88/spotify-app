import React from 'react'
import AudioPlayer from '../AudioPlayer/AudioPlayer'
// import ReactTransitionGroup from 'react-addons-transition-group'
import FadeIn from '../../transitions/FadeIn/FadeInComponent'



const TrackResults = props => {
  const { 
    handleTrackClick, 
    selectedTrackIndex, 
    tracks 
  } = props
  const selectedTrack = tracks && tracks[selectedTrackIndex]
  // Todo: alter transition to allow multiple items to be transitioned in.
  return (
    <div className='track-results'>
      <FadeIn>
        {selectedTrack && <AudioPlayer track={selectedTrack} /> }
      </FadeIn>
      <FadeIn>
        {tracks.length > 0 && tracks.map((track, index) => {
          const { name = ''} = track
            return(
              <div
                className={
                  index === selectedTrackIndex
                  ? 'selected'
                  : null
                }
                key={index}
                onClick={handleTrackClick.bind(null, index)}
              >
                {name}
              </div>
          )
        })
      }
      </FadeIn>
    </div>
  )
}

export default TrackResults