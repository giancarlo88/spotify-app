import React from 'react';
import PropTypes from 'prop-types'
import './App.css';
import Form from '../Form/Form'
import Results from '../Results/Results'


const AppComponent = props => {
  const { handleQueryUpdate, artists, tracks } = props
  return (
    <div>
      <Form 
        handleQueryUpdate={handleQueryUpdate}
        />
      <Results
        artists={artists}
        tracks={tracks}
      />
    </div>
  )
}

AppComponent.propTypes = { 
  artists: PropTypes.array.isRequired,
  handleQueryUpdate: PropTypes.func, 
  tracks: PropTypes.array.isRequired
}

export default AppComponent