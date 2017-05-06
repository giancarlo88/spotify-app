import React from 'react'
import PropTypes from 'prop-types'
import './TrackResult.css'

const TrackResult = props => {
  const { handleTrackClick, index, name, selected } = props
  const className = selected ? 'track-result selected' : 'track-result'
  return (
    <a
      className={className}
      onClick={handleTrackClick.bind(null, index)}
    >
    {name}
  </a>
  )
}

TrackResult.propTypes = {
  handleTrackClick: PropTypes.func, 
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired, 
}

export default TrackResult