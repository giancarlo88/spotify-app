import React, { Component } from 'react';
import AppComponent from '../../components/App/App'
import { SpotifyArtistFetch, SpotifyTrackFetch, SpotifyAuth } from '../../services/service'
import debounce from '../../utils/debounce'

class AppContainer extends Component {
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

  debounceQuery = debounce(query => this.requestResults(query), 500)

  handleQueryUpdate (e) {
    const query = e.target.value
    this.setState({
      query: query
    })
    this.debounceQuery(this.state.query)
  }

  async requestResults(query) {

    const auth = SpotifyAuth()
    console.log(auth)
    const getTrack = SpotifyTrackFetch(query, auth)
    .then(result => result)

    const getArtist = SpotifyArtistFetch(query, auth)
    .then(result => result)

    Promise.all([getTrack, getArtist]).then(
      // N.B.: values is an array of the returned results from the Promises in Promise.all(). In this case it is ['artist', 'track'].
      values => {
        this.setState(oldState => {
          let { tracks, artists, query } = oldState
          if (query){
            values[0] && tracks.push(values[0])
            values[1] && artists.push(values[1])
            return {
              artists: artists,
              tracks: tracks
            }
          } else {
            // Clear the results if there isn't a query
            return {
              artists: [],
              tracks: []
            }
          }
        })
      })
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

export default AppContainer;
