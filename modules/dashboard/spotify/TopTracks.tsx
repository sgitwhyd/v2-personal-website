import React, { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SpotifyTopTrack } from '@/types/spotify'
import { createMinutesFromMs } from '@/helpers/createMinutesFromMs'
import { useFetcher } from '@/hooks'

const TrackSkeleton = () => {
  return (
    <div className="flex animate-pulse justify-between items-center mt-5">
      <div className="flex items-center space-x-6">
        <div className="rounded-lg w-[100px] h-[100px] bg-gray-200 transition-[background-color] duration-300"></div>
        <Link href="#">
          <p className="font-semibold bg-gray-200 transition-[background-color] duration-300 h-4 w-48"></p>
          <p className="text-xs bg-gray-200 transition-[background-color] duration-300 h-4 w-32 mt-3"></p>
        </Link>
      </div>
      <p className="text-center h-4 w-8 bg-gray-200 transition-[background-color] duration-300"></p>
    </div>
  )
}

const Track = ({ albumImageUrl, artist, duration_ms, id, songUrl, title }: SpotifyTopTrack) => {
  return (
    <div key={id} className="flex justify-between items-center mt-5">
      <div className="flex items-center space-x-6">
        <Image src={albumImageUrl} alt={title} width={100} height={100} className="rounded-lg" priority />
        <Link href={songUrl} target="_blank">
          <p className="font-semibold">{title}</p>
          <p className="text-sm font-medium mt-2 font-secondary">{artist}</p>
        </Link>
      </div>
      <p className="text-center font-secondary">{createMinutesFromMs(duration_ms)}</p>
    </div>
  )
}

export const TopTrack = () => {
  const { isLoading, data } = useFetcher<{ tracks: SpotifyTopTrack[] }>({
    name: 'spotify-top-tracks',
    url: '/api/spotify/top-tracks',
  })

  return (
    <>
      {isLoading
        ? Array.from({ length: 5 }).map((_, index) => <TrackSkeleton key={index} />)
        : data?.tracks.map((track, index: number) => {
            return (
              <Fragment key={index}>
                <Track key={track.id} {...track} />
                {index !== data.tracks.length - 1 && <hr key={index} className="my-5" />}
              </Fragment>
            )
          })}
    </>
  )
}
