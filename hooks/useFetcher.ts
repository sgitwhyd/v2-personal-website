import { useQuery, UseQueryResult } from '@tanstack/react-query'

type UseFetcherProps = {
  name: string
  url: string
  init?: any
}

const fetcher = async (url: string, init?: any) => {
  const response = await fetch(url, init)
  return response.json()
}

export const useFetcher = <T>({ name, url, init }: UseFetcherProps): UseQueryResult<T> => {
  return useQuery<T>([name], () => fetcher(url, init))
}
