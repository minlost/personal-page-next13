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
      ${isSwaping ? "animate-textShaking" : ""}
    
      ${
        shouldShowScrollbar && isTvMode
          ? "overflow-y-scroll "
          : "overflow-hidden"
      }      
      ${
        isTvMode
          ? "aspect-video w-full text-[1.2em] md:text-[3em] -translate-y-[1px] z-50 "
          : "w-full h-full xl:px-0 text-[2em] md:text-[4em] z-50"
      } duration-1000 ease-in-out  custom-text-shadow  relative  px-5 md:px-12 `}
    >
      <ProgramSwitcher />

      <ul
        className={cn(
          `    mt-20 flex items-center flex-col`,
          `${isTvMode ? "md:mt-64" : "mt-48 md:mt-96 "}`
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
