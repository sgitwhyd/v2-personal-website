import React from "react";
import { SpotifyCurrentlyPlayingApiResponse } from "@/types";
import clsx from "clsx";
import { useFetcher } from "@/hooks";

export const CurrentlyPlaying = () => {
  const { data } = useFetcher<SpotifyCurrentlyPlayingApiResponse>({
    name: "spotify-currently-playing",
    url: "/api/spotify/currently-playing",
  });

  return (
    <div
      className={clsx(
        "mb-4 flex items-center space-x-1 rounded bg-gray-200 p-3",
        "mt-5 transition-[background-color] duration-300",
        "dark:bg-gray-700",
      )}
    >
      {!data?.isPlaying ? (
        <p className="font-secondary text-xl">Not playing anything</p>
      ) : (
        <iframe
          style={{ borderRadius: "14px" }}
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
  );
};
