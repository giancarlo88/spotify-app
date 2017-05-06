import React from 'react'
import PropTypes from 'prop-types'

const AudioPlayer = props => {
  const { track } = props
    return (
      <div>
        <p>Currently previewing: {track.name}</p>
          <audio className='preview-player' controls>
            <source src={track.preview_url} />
          </audio>
      </div>
    ) 
  }


AudioPlayer.propTypes = {
  track: PropTypes.object.isRequired
}

export default AudioPlayer
