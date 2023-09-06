"use client"

import { useSwitchScreen } from "@/hooks/useSwitchScreen"
import { FC } from "react"
import Chanells from "../chanells/Channels"
import ScreenAnimatator from "./ScreenAnimatator"

interface ScreenProps {
  children: React.ReactNode
}

const Screen: FC<ScreenProps> = ({ children }) => {
  const { isTvMode, isShowing } = useSwitchScreen()

  return (
    <div
      className={`${
        isTvMode
          ? "    mt-20  w-[90%] h-full  aspect-video xl:w-[70%] border-black border text-[1rem]   shadow-screen-glowing "
          : "w-full h-screen   text-[1rem] "
      } duration-500 ease-linear relative z-0 text-shadow-def text-slate-300 `}
    >
      <ScreenAnimatator>
        <Chanells />
        {isShowing && <>{children}</>}
      </ScreenAnimatator>
    </div>
  )
}

export default Screen
