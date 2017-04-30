import React, { Component } from 'react';
import AppComponent from '../../components/App/App'
import { SpotifyArtistFetch, SpotifyTrackFetch } from '../../services/service'
import debounce from '../../utils/debounce'

const merge = (oldState, newState) => {
  return {...oldState, ...newState}
}

class AppView extends Component {
  constructor() {
    super()
    this.state = {
      query: '',
      artists: [],
      tracks: []
    }
    this.handleQueryUpdate = this.handleQueryUpdate.bind(this)
    this.requestResults = this.requestResults.bind(this)
    this.debounceQuery = this.debounceQuery.bind(this)
  }
  
  debounceQuery = debounce(query => this.requestResults(query), 500)

  handleQueryUpdate (e) {
    const query = e.target.value
    this.setState({
      query: query
    })
    this.debounceQuery(this.state.query)
  }

  requestResults(query) {
    
    const getTrack = SpotifyTrackFetch(query)
    .then(result => {
      console.info(result)
      return result
    })

    const getArtist = SpotifyArtistFetch(query)
    .then(result => result)

    Promise.all([getTrack, getArtist]).then(
      values => {
        this.setState(oldState => {
          let { tracks, artists } = oldState
          values[0] && tracks.push(values[0])
          values[1] && artists.push(values[1])
          return {
            artists: artists, 
            tracks: tracks
          }
        })
        console.info(values)
      }
    )
  }
  render() {
    const { artists, tracks } = this.state
    return (
      <AppComponent 
        handleQueryUpdate={this.handleQueryUpdate}
        artists={artists}
        tracks={tracks}
      />
    )
  }
}

export default AppView;
