export const createMinutesFromMs = (ms: number) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds < "10" ? "0" : ""}${seconds}`;
};
