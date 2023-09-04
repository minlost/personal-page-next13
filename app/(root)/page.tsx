"use client"

import ProgramSwitcher from "@/components/ui/ProgramSwitcher"
import { useShowScrollbar } from "@/hooks/useShowScrollbar"
import { useSwitchScreen } from "@/hooks/useSwitchScreen"
import { cn } from "@/lib/utils"
import LinksBox from "../../components/ui/LinksBox"

export default function HomePage() {
  const { isTvMode, isSwaping } = useSwitchScreen()

  const { shouldShowScrollbar } = useShowScrollbar(isTvMode)

  return (
    <div
      className={`
      
      ${
        shouldShowScrollbar && isTvMode
          ? "overflow-y-scroll"
          : "overflow-hidden"
      }
      ${
        isTvMode
          ? "aspect-video text-[1.2em] md:text-[3em] -translate-y-[1px] z-50 "
          : "w-full h-full aspect-video xl:px-0 text-[2em] md:text-[4em] z-50"
      } duration-1000 ease-in-out  custom-text-shadow  relative  px-5 md:px-12 ${
        isSwaping ? "animate-textShaking" : ""
      } `}
    >
      <ProgramSwitcher />

      <div
        className={cn(
          `    mt-20 `,
          `${isTvMode ? "md:mt-64" : "mt-48 md:mt-96 "}`
        )}
      >
        <p>
          Hello, I&apos;m Václav Vlček... Václav Vlček, an enthusiastic Junior
          Developer passionate about programming, technology, astronomy, and
          science. With a specialization in Next.js, TypeScript, and Python, I
          continuously strive to enhance and broaden my skill set. My driving
          forces include problem-solving, embracing new technologies, and
          crafting efficient and innovative solutions. Apart from diving deep
          into code, I am deeply fascinated by the wonders of the universe and
          the scientific principles that govern it. I relish taking on
          challenging projects and collaborating with teams to bring ideas to
          life. Eagerly looking forward to integrating my dedication, expertise,
          and passion for both tech and science with your team as we join hands
          to craft remarkable digital experiences.
        </p>
      </div>

      <LinksBox />
    </div>
  )
}
