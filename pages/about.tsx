import React from 'react'
import PageContainer from '@/components/layouts/container/PageContainer'
import { Github, Coding, Repository } from '@/modules/dashboard'
import { TopTrack, CurrentlyPlaying } from '@/modules/dashboard/spotify'

const PageSeo = {
  title: 'Dashboard',
  description: 'Dashboard',
}

const About = () => {
  return (
    <PageContainer seoProps={PageSeo}>
      <h1 className="text-3xl font-bold">Me</h1>
      <hr className="my-5" />
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Github />
        <Coding />
        <Repository />
      </section>

      <section className="mt-5">
        <h2 className="text-2xl font-bold">Sigit&apos;s Currently Playing</h2>
        <CurrentlyPlaying />
      </section>
      <section className="h-1/3">
        <h2 className="text-2xl font-bold">Spotify Top Tracks</h2>
        <TopTrack />
      </section>
    </PageContainer>
  )
}

export default About
