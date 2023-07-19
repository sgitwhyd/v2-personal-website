import React from 'react'
import PageContainer from '@/components/layouts/container/PageContainer'
import { Projects as Project } from '@/modules/project'

const PageSeo = {
  title: 'Projects',
  description: 'Projects',
}

const Projects = () => {
  return (
    <PageContainer seoProps={PageSeo}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Project />
      </div>
    </PageContainer>
  )
}

export default Projects
