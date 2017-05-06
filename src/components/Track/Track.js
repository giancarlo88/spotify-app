import React from 'react'
import PropTypes from 'prop-types'
import './Track.css'

const Track = props => {
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

Track.propTypes = {
  handleTrackClick: PropTypes.func, 
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired, 
}

export default Track