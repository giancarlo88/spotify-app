import React from 'react'

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

export default AudioPlayer