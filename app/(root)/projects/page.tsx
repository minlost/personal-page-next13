"use client"

import Project from "@/components/project/Project"
import LinksBox from "@/components/ui/LinksBox"
import ProgramSwitcher from "@/components/ui/ProgramSwitcher"
import { useShowScrollbar } from "@/hooks/useShowScrollbar"
import { useSwitchScreen } from "@/hooks/useSwitchScreen"
import { projects } from "@/lib/projects"
import { cn } from "@/lib/utils"
import { useState } from "react"

export default function Home() {
  const { isTvMode, toggleTVMode, channel, isSwaping } = useSwitchScreen()

  const [isAnimating, setIsAnimating] = useState(true)

  const { shouldShowScrollbar } = useShowScrollbar(isTvMode)

  return (
    <div
      className={`
      ${isSwaping ? "animate-textShaking" : ""}
      ${
        shouldShowScrollbar && isTvMode
          ? "overflow-y-scroll "
          : "overflow-hidden"
      }
      ${
        isTvMode
          ? "aspect-video text-[1.2em] md:text-[3em] -translate-y-[1px] z-50 "
          : "w-full h-full aspect-video xl:px-0 text-[2em] md:text-[4em] z-50"
      } duration-1000 ease-in-out  custom-text-shadow  relative  px-5 md:px-12 `}
    >
      <ProgramSwitcher />

      <ul
        className={cn(
          `mt-20  md:grid grid-cols-1 md:grid-cols-2 z-50 gap-x-16 overflow-hidden `,
          `${isTvMode ? "md:mt-64" : "mt-48 md:mt-96 "}`
        )}
      >
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </ul>
      <LinksBox />
    </div>
  )
}
