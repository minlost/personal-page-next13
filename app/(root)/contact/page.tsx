"use client"

import LinksBox from "@/components/ui/LinksBox"
import ProgramSwitcher from "@/components/ui/ProgramSwitcher"
import { useShowScrollbar } from "@/hooks/useShowScrollbar"
import { useSwitchScreen } from "@/hooks/useSwitchScreen"
import { cn } from "@/lib/utils"

export default function Home() {
  const { isTvMode, isSwaping } = useSwitchScreen()

  const { shouldShowScrollbar } = useShowScrollbar(isTvMode)

  return (
    <div
      className={`
      ${
        shouldShowScrollbar && isTvMode
          ? "overflow-y-scroll "
          : "overflow-hidden"
      }
      ${
        isTvMode
          ? "aspect-video text-[1.2em] md:text-[3em] -translate-y-[1px] z-50 "
          : "w-full h-full  text-[2em] md:text-[4em] z-50 overflow-y-scroll "
      } custom-text-shadow relative  px-5 md:px-16 lg:px-32 xl:px-44 z-[200] ${
        isSwaping ? "animate-textShaking" : ""
      } `}
    >
      <ProgramSwitcher />

      <ul
        className={cn(
          `    mt-20 flex items-center flex-col`,
          `${isTvMode ? "md:mt-64" : "mt-48  "}`
        )}
      >
        <li>
          See ya in <span className="animate-blinkmulticolor">hell</span>
        </li>
        <li> vaclav.wolf.vlceg@gmail.com</li>
        <li>+420 775 931 110</li>
      </ul>

      <LinksBox />
    </div>
  )
}
