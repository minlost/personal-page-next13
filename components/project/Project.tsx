"use client"

import Link from "next/link"
import { FC, useState } from "react"

interface ProjectProps {
  project: {
    label: string
    url: string
    description: string
  }
}

const Project: FC<ProjectProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <li
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full"
    >
      <Link href={project.url}>
        <span className="flex flex-col">
          <span className="cursor-pointer z-10 relative">
            <span
              className={`relative z-20 hover:animate-blinkmulticolor text-[1.5em] md:text-[1em]  `}
            >
              {project.label}
            </span>
          </span>

          <span className="w-full h-full z-10  ">
            <p className="text-[0.8em] md:text-[0.6em] ">
              {project.description}
            </p>
          </span>
        </span>
      </Link>
    </li>
  )
}

export default Project
