import { SpotifyGraphQLClient } from 'spotify-graphql'
import config from './config'

export const SpotifyAuth = () => {
  const environment = process.env.NODE_ENV === 'development' ? 'beta' : 'prod'
  return fetch(
    `https://se64y98oq0.execute-api.eu-west-2.amazonaws.com/${environment}/aws-nodejs-dev-getToken`
  )
    .then((res) => res.json())
    .then((res) => ({ accessToken: res.body.input.access_token }))
    .catch((err) => Promise.reject(err))
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
