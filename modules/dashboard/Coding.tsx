import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetcher } from '@/libs/fetcher'
import { Card } from './layouts/Card'

export const Coding = () => {
  const { isLoading, data } = useQuery(['coding-hours'], () => fetcher('/api/coding/stats'))
  return (
    <Card count={isLoading ? '...' : data.codingHours} link="https://wakatime.com/sigitwhyu" title=" Coding Hours" />
  )
}
