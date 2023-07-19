import { useQuery } from '@tanstack/react-query'

const fetcher = async (url: string, init?: any) => {
  const response = await fetch(url, init)
  return response.json()
}

export const useFetcher = ({ name, url }: { name: string; url: string }) => {
  const { data, error, isLoading, isError } = useQuery([name], () => fetcher(url))

  return {
    data,
    error,
    isLoading,
    isError,
  }
}
