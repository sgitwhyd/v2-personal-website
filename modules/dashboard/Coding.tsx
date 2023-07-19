import React from 'react'
import { Card } from './layouts/Card'
import { useFetcher } from '@/hooks/useFetcher'
import { WakatimeApiResponse } from '@/types/wakatime'

export const Coding = () => {
  const { isLoading, data } = useFetcher<WakatimeApiResponse>({
    name: 'coding-hours',
    url: '/api/coding/stats',
  })

  return (
    <Card count={isLoading ? '...' : data?.codingHours} link="https://wakatime.com/sigitwhyu" title=" Coding Hours" />
  )
}
