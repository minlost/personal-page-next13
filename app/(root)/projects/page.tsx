"use client"

import PageStyler from "@/components/pageStyler/PageStyler"
import Project from "@/components/project/Project"
import LinksBox from "@/components/ui/LinksBox"
import ProgramSwitcher from "@/components/ui/ProgramSwitcher"
import { useSwitchScreen } from "@/hooks/useSwitchScreen"
import { projects } from "@/lib/projects"
import { cn } from "@/lib/utils"

export default function Home() {
  const { isTvMode } = useSwitchScreen()

  return (
    <PageStyler>
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
    </PageStyler>
  )
}
