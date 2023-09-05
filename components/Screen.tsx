"use client"

import { useSwitchScreen } from "@/hooks/useSwitchScreen"
import { FC } from "react"
import Chanells from "./Chanells/Channels"

interface ScreenProps {
  children: React.ReactNode
}

const Screen: FC<ScreenProps> = ({ children }) => {
  const { isTvMode, isShowing, isSwaping } = useSwitchScreen()

  return (
    <div
      className={`${
        isTvMode
          ? "    mt-20  w-[90%] h-full md:h-full bg-red-500 aspect-video xl:w-[70%] border-black border text-[1rem] animate-move  shadow-screen-glowing "
          : "w-full text-[2rem]"
      }duration-500 ease-in-out   relative z-0
      `}
    >
      <div
        className={`${
          isSwaping ? "custom-text-shadow-animation" : "custom-text-shadow"
        }`}
      >
        <Chanells />
        {isShowing && <>{children}</>}
      </div>
    </div>
  )
}

export default Screen
