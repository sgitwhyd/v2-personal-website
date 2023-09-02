import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { SpotifyTopTrack } from "@/types";
import { createMinutesFromMs } from "@/helpers/createMinutesFromMs";
import { useFetcher } from "@/hooks";

const TrackSkeleton = () => {
  return (
    <div className="mt-5 flex animate-pulse items-center justify-between">
      <div className="flex items-center space-x-5">
        <div className="flex h-[70px] space-x-5">
          <div className="w-12 bg-gray-200 transition-[background-color] duration-300">
            1
          </div>
          <div className="w-[70px] rounded-lg bg-gray-200 transition-[background-color] duration-300">
            1
          </div>
        </div>
        <Link href="#">
          <p className="h-4 w-48 bg-gray-200 font-semibold transition-[background-color] duration-300"></p>
          <p className="mt-3 h-4 w-32 bg-gray-200 text-xs transition-[background-color] duration-300"></p>
        </Link>
      </div>
      <p className="h-4 w-8 bg-gray-200 text-center transition-[background-color] duration-300"></p>
    </div>
  );
};

const Track = ({
  albumImageUrl,
  artist,
  duration_ms,
  id,
  songUrl,
  title,
  rank,
}: SpotifyTopTrack) => {
  return (
    <div key={id} className="mt-5 flex items-center justify-between">
      <div className="flex space-x-5">
        <div className="hidden w-12 items-center justify-center font-semibold md:flex">
          #{rank}
        </div>
        <div className="flex items-center space-x-4">
          <Image
            src={albumImageUrl}
            alt={title}
            width={70}
            height={70}
            className="rounded-lg object-contain"
            priority
          />
          <div className="">
            <Link href={songUrl} target="_blank">
              <p className="font-semibold hover:text-[#fff480]">{title}</p>
            </Link>
            <p className="mt-2 font-secondary text-sm font-medium">{artist}</p>
          </div>
        </div>
      </div>
      <p className="text-center font-secondary">
        {createMinutesFromMs(duration_ms)}
      </p>
    </div>
  );
};

export const TopTrack = () => {
  const { isLoading, data } = useFetcher<{ tracks: SpotifyTopTrack[] }>({
    name: "spotify-top-tracks",
    url: "/api/spotify/top-tracks",
  });

  return (
    <>
      {isLoading
        ? Array.from({ length: 5 }).map((_, index) => (
            <TrackSkeleton key={index} />
          ))
        : data?.tracks.map((track, index: number) => {
            return (
              <Fragment key={index}>
                <Track key={track.id} {...track} rank={index + 1} />
                {index !== data.tracks.length - 1 && (
                  <hr key={index} className="my-5" />
                )}
              </Fragment>
            );
          })}
    </>
  );
};
