import React from 'react'
import './ArtistResult.css'

const ArtistResult = props => {
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

export default ArtistResult