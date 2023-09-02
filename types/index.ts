export type GithubUser = {
  id: number;
  login: string;
  avatar_url: string;
  name: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
};

export type GithubRepository = {
  id: number;
  name: string;
  fork: boolean;
  stargazers_count: number;
};

export type GithubApiResponse = {
  user: {
    username: string;
    avatarUrl: string;
    name: string;
    publicRepos: number;
    publicGists: number;
    followers: number;
    following: number;
  };
  stars: number;
};

export type ProjectType = {
  title: string;
  description: string;
  githubLink: string;
  image: string;
  demoLink: string;
};

export type SpotifyTopTrack = {
  albumImageUrl: string;
  artist: string;
  songUrl: string;
  title: string;
  id: string;
  duration_ms: number;
  rank: number;
};
export type SpotifyTrack = {
  album: {
    images: {
      url: string;
    }[];
  };
  artists: {
    name: string;
  }[];
  external_urls: {
    spotify: string;
  };
  name: string;
  id: string;
  duration_ms: number;
};

export type SpotifyCurrentlyPlayingApiResponse = {
  isPlaying: boolean;
  songUrl: string;
  embedUrl: string;
};

export type WakatimeApiResponse = {
  codingHours: string;
};
