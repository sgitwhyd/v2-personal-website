import React from 'react'
import { Card } from './layouts/Card'
import { useFetcher } from '@/hooks/useFetcher'
import { GithubApiResponse } from '@/types/github'

export const Github = () => {
  const { isLoading, data } = useFetcher<GithubApiResponse>({
    name: 'github-stars',
    url: '/api/github/stats',
  })

  return (
    <Card
      count={isLoading ? '...' : data?.stars}
      link={`https://github.com/${data?.user.username}`}
      title=" Github Stars"
    />
  )
}
