import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetcher } from '@/libs/fetcher'
import { Card } from './layouts/Card'

export const Github = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['github-data'],
    queryFn: () => fetcher('/api/github/stats'),
  })
  return (
    <Card
      count={isLoading ? '...' : data.stars}
      link={`https://github.com/${data?.user.username}`}
      title=" Github Stars"
    />
  )
}
