import { 
  SpotifyGraphQLClient 
} from 'spotify-graphql';
import config from './config'



export const SpotifyArtistFetch = query => {
  return SpotifyGraphQLClient(config).query(`
    {
      artist(name: "${query}") {
        name
        images {
          url
        }
      }
    }
  `)
  .then(result => result.data.artist)
  .catch(error => console.warn(error))
}


export const SpotifyTrackFetch = query => {
  return SpotifyGraphQLClient(config).query(`
      {
        track(name: "${query}") {
          name
          preview_url
        }
      }
    `)
  .then(result => Promise.resolve(result.data.track))
  .catch(error => console.warn(error))
}