import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { BsGithub } from 'react-icons/bs'
import Link from 'next/link'
import { ProjectType } from '@/types/project'
import { useRouter } from 'next/navigation'

export const CardProject = ({
  projectTitle,
  projectDescription,
  projectDemoLink,
  projectGithubLink,
  projectImage,
}: ProjectType) => {
  const router = useRouter()

  const handleDemoLink = () => router.push(projectDemoLink)

  return (
    <div
      className={clsx(
        'h-fit text-white bg-brand-aqua transition-[background-color] duration-300 border-brand-midnight-blue shadow-projectCard border-4 border-solid overflow-hidden',
        ' dark:bg-brand-cream  rounded-2xl  dark:border-brand-midnight-blue'
      )}
    >
      <div className="relative w-full h-72 overflow-hidden aspect-square">
        <Image
          src={projectImage}
          fill={true}
          sizes="100vw"
          alt={`${projectTitle} - image`}
          className="object-cover"
          priority
        />
      </div>
      <div className="p-3 flex flex-col justify-between h-full max-h-[200px] text-brand-midnight-blue">
        <div className=" inline-flex items-center justify-between">
          <h1 className="text-2xl font-bold">{projectTitle}</h1>
          <Link href={projectGithubLink} aria-label={projectTitle} target="_blank">
            <BsGithub className="inline-block ml-2 text-2xl" />
          </Link>
        </div>
        <p className="font-medium py-2 font-secondary">{projectDescription}</p>
        <button
          className="inline-flex items-center ml-auto transition-[background-color] duration-300 text-lg font-bold bg-brand-cream dark:bg-brand-aqua w-fit py-2 px-8 border-2 border-solid border-brand-midnight-blue"
          onClick={handleDemoLink}
        >
          Demo
        </button>
      </div>
    </div>
  )
}
