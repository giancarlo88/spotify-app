import React, { Component } from 'react';
import PropTypes from 'prop-types'
import TrackResultsComponent from '../../components/TrackResults/TrackResults'

class TrackResults extends Component { 
  constructor(){
    super()
    this.state = {
      selectedTrackIndex: null
    }

    this.handleTrackClick = this.handleTrackClick.bind(this)
  }
  handleTrackClick (index) {
    const audioPlayer = document.querySelector('.preview-player')
    this.setState({ 
      selectedTrackIndex: index
    })
    audioPlayer && audioPlayer.load()
  }
  render () {
    const { tracks } = this.props
    return (
      <TrackResultsComponent
        handleTrackClick={this.handleTrackClick}
        selectedTrackIndex={this.state.selectedTrackIndex}
        tracks={tracks}
      />
    )
  }
}

TrackResults.propTypes = { 
  tracks: PropTypes.array
}

export default TrackResults
