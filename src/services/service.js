import { SpotifyGraphQLClient } from 'spotify-graphql'
import config from './config'

const makeAuthHeader = (config) => {
  const b64 = btoa(`${config.clientId}:${config.clientSecret}`)
  return {
    Authorization: `Basic ${b64}`,
    'Access-Control-Allow-Origin': '*'
  }
}

export const SpotifyAuth = async () => {
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'post',
    headers: makeAuthHeader(config),
    credentials: 'include',
    body: {
      grant_type: 'client_credentials'
    }
  })
  console.log(res)
  return {
    access_token: res.text()
  }
}

export const SpotifyArtistFetch = (query, auth) => {
  const authConfig = { ...config, ...auth }
  return SpotifyGraphQLClient(authConfig)
    .query(
      `
    {
      artist(name: "${query}") {
        name
        images {
          url
        }
        href
        uri
      }
    }
  `
    )
    .then((result) => result.data.artist)
    .catch((error) => console.warn(error))
}

export const SpotifyTrackFetch = (query, auth) => {
  const authConfig = { ...config, ...auth }
  return SpotifyGraphQLClient(authConfig)
    .query(
      `
      {
        track(name: "${query}") {
          name
          preview_url
        }
      }
    `
    )
    .then((result) => Promise.resolve(result.data.track))
    .catch((error) => console.warn(error))
}
