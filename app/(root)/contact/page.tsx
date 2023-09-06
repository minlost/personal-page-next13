"use client"

import PageStyler from "@/components/pageStyler/PageStyler"
import LinksBox from "@/components/ui/LinksBox"
import ProgramSwitcher from "@/components/ui/ProgramSwitcher"
import { useSwitchScreen } from "@/hooks/useSwitchScreen"
import { cn } from "@/lib/utils"

export default function Home() {
  const { isTvMode } = useSwitchScreen()

  return (
    <PageStyler>
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
        <li> vaclav.wolf.vlcek@gmail.com</li>
        <li>+420 775 931 110</li>
      </ul>

      <LinksBox />
    </PageStyler>
  )
}
