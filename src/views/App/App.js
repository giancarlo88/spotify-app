import React, { Component } from 'react';
import AppComponent from '../../components/App/App'
import { SpotifyArtistFetch, SpotifyTrackFetch } from '../../services/service'

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
  }
  handleQueryUpdate (e) {
    this.setState({
      query: e.target.value
    })
    this.requestResults(e.target.value)
  }
  requestResults(query) {
    const getTrack = SpotifyTrackFetch(query)
    .then(result => {
      console.error(result)
      return result
    })

    const getArtist = SpotifyArtistFetch(query)
    .then(result => {
      console.error(result)
      return result
    })
    Promise.all([getTrack, getArtist]).then(
      values => {
        this.setState(oldState => {
          let { tracks, artists } = oldState
          tracks.push(values[0])
          artists.push(values[1])
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
