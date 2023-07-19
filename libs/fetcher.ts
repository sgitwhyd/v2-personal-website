export const fetcher = async (url: string, init?: any) => {
  const response = await fetch(url, init)
  return response.json()
}
