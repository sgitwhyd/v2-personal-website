import type { NextApiHandler } from "next";
import { getNowPlaying } from "@/libs/spotify";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const response = await getNowPlaying();

    if (response.status === 204 || response.status > 400) {
      return res.status(200).json({ isPlaying: false });
    }

    const song = await response.json();
    const isPlaying = song.is_playing;
    const songUrl = song.item.external_urls.spotify;
    const embedUrl = songUrl.split("track").join("embed/track");

    return res.status(200).json({
      isPlaying,
      songUrl,
      embedUrl,
    });
  }
};

export default handler;
