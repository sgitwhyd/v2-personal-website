import React from 'react'
import Image from 'next/image'

type skillsType = {
  language: string[]
  frontend: string[]
  backend: string[]
} & Record<string, string[]>

const skills: skillsType = {
  language: ['JavaScript', 'TypeScript', 'PHP'],
  frontend: ['React', 'Next.js', 'Tailwind CSS', 'Redux', 'Laravel'],
  backend: ['Node.js', 'Express.js', 'MySQL'],
}

export const Hero = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:h-[650px] items-center gap-10">
        <div className="w-full">
          <div
            className="relative hidden md:block"
            style={{
              boxShadow: '10px 10px 0px var(--accent-2)',
              transform: `rotate(-2deg)`,
            }}
          >
            <div className="absolute w-3 h-3 bg-brand-cream z-10 -top-1 -left-1 border-2 border-brand-midnight-blue  dark:bg-brand-aqua"></div>
            <div className="absolute w-3 h-3 bg-brand-cream z-10 -top-1 -right-1 border-2 border-brand-midnight-blue  dark:bg-brand-aqua"></div>
            <div className="absolute w-3 h-3 bg-brand-cream z-10 -bottom-1 -left-1 border-2 border-brand-midnight-blue  dark:bg-brand-aqua"></div>
            <div className="absolute w-3 h-3 bg-brand-cream z-10 -bottom-1 -right-1 border-2 border-brand-midnight-blue  dark:bg-brand-aqua"></div>
            <div className="aspect-[1.48/1] w-full">
              <Image alt="Sigit Wahyudi" src="/assets/hero.jpg" fill className="border-4 border-black object-cover" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between">
          <h1 className="text-3xl md:text-7xl font-semibold mb-5">Sigit Wahyudi</h1>
          <p className="text-md md:text-xl">
            Software developer who focuses on web development and in the javascript environment
          </p>
        </div>
      </div>
      <section id="skills" className="mt-5 md:mt-0">
        <h1 className="text-3xl font-bold">Skills</h1>
        <hr className="my-5" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {Object.keys(skills).map((key, index) => (
            <div key={index} className="flex flex-col items-start p-5 border-2 rounded-lg">
              <h2 className="text-3xl font-bold">{key.charAt(0).toUpperCase() + key.slice(1)}</h2>
              <ul className="list-outside mt-3 space-y-2">
                {skills[key].map((skill: string, index: number) => (
                  <li key={index} className="text-xl">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
