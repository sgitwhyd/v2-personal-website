import type { NextApiHandler } from 'next'
import { getTopTracks } from '@/libs/spotify'
import { SpotifyTopTrack, SpotifyTrack } from '@/types/spotify'

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    const response = await getTopTracks()
    const data = await response.json()

    const { items } = data

    const tracks: SpotifyTopTrack[] = items.map((track: SpotifyTrack) => ({
      albumImageUrl: track.album.images[0].url,
      artist: track.artists.map((_artist: any) => _artist.name).join(', '),
      songUrl: track.external_urls.spotify,
      title: track.name,
      id: track.id,
      duration_ms: track.duration_ms,
    }))

    return res.status(200).json({ tracks })

    // this code to get refresh token
    // if (!req.query.code) {
    //   const scope = 'user-read-currently-playing user-top-read user-read-recently-played'
    //   const redirect_uri = 'http://localhost:3000/api/spotify/top-tracks'
    //   res.redirect(
    //     'https://accounts.spotify.com/authorize?' +
    //       querystring.stringify({
    //         response_type: 'code',
    //         client_id: process.env.SPOTIFY_CLIENT_ID,
    //         scope: scope,
    //         redirect_uri: redirect_uri,
    //       })
    //   )
    // } else {
    //   const code = req.query.code as string
    //   const redirect_uri = 'http://localhost:3000/api/spotify/top-tracks'
    //   const basic = Buffer.from(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET).toString(
    //     'base64'
    //   )
    //   const response = await fetch('https://accounts.spotify.com/api/token', {
    //     method: 'POST',
    //     headers: {
    //       Authorization: `Basic ${basic}`,
    //       'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     body: querystring.stringify({
    //       grant_type: 'authorization_code',
    //       code: code,
    //       redirect_uri: redirect_uri,
    //     }),
    //   })
    //   const data = await response.json()
    //   return res.status(200).json({ data })
    // }
  }
}

export default handler
