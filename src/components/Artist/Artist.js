import React from 'react'
import PropTypes from 'prop-types'
import './Artist.css'

const Artist = props => {
  const { image, name, uri } = props
  return (
  <a target='_blank' href={uri}>
    <div className='artist-result'>
      <img 
        className='artist-result__image' 
        src={image}
        alt={name}
        />
      {name}
    </div>  
  </a>
)
}

Artist.propTypes = { 
  image: PropTypes.string.isRequired, 
  name: PropTypes.string.isRequired, 
  uri: PropTypes.string.isRequired
}

export default Artist