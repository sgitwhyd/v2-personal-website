import React from 'react'
import { CardProject } from './layouts/CardProject'
import projects from '@/_data/projects.json'

export const Projects = () => {
  return (
    <>
      {projects.map((project) => (
        <CardProject key={project.projectTitle} {...project} />
      ))}
    </>
  )
}
