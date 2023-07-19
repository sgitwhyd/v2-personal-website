import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetcher } from '@/libs/fetcher'
import { SpotifyCurrentlyPlayingApiResponse } from '@/types/spotify'
import clsx from 'clsx'

export const CurrentlyPlaying = () => {
  const { data } = useQuery<SpotifyCurrentlyPlayingApiResponse>({
    queryKey: ['spotify-currently-playing'],
    queryFn: () => fetcher('/api/spotify/currently-playing'),
  })
  return (
    <div
      className={clsx(
        'mb-4 flex items-center space-x-1 rounded bg-gray-200 p-3',
        'transition-[background-color] duration-300 mt-5',
        'dark:bg-gray-700'
      )}
    >
      {!data?.isPlaying ? (
        <p className="font-secondary text-xl">Not playing anything</p>
      ) : (
        <iframe
          style={{ borderRadius: '14px' }}
          src={data?.embedUrl}
          width="100%"
          height="80"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Sigit's Spotify Playing Now"
          name="Sigit's Spotify Playing Now"
        ></iframe>
      )}
    </div>
  )
}
