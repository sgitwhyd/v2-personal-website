export type SpotifyTopTrack = {
  albumImageUrl: string
  artist: string
  songUrl: string
  title: string
  id: string
  duration_ms: number
}
export type SpotifyTrack = {
  album: {
    images: {
      url: string
    }[]
  }
  artists: {
    name: string
  }[]
  external_urls: {
    spotify: string
  }
  name: string
  id: string
  duration_ms: number
}

export type SpotifyCurrentlyPlayingApiResponse = {
  isPlaying: boolean
  songUrl: string
  embedUrl: string
}
