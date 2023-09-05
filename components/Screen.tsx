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
          ? "    mt-20  w-[90%] h-full  aspect-video xl:w-[70%] border-black border text-[1rem]   shadow-screen-glowing "
          : "w-full text-[1rem] "
      } duration-500 ease-linear relative z-0 `}
    >
      <div
        className={` w-full h-full ${
          isSwaping
            ? "  custom-text-shadow-animation animate-textShaking"
            : "custom-text-shadow "
        } `}
      >
        <Chanells />
        {isShowing && <>{children}</>}
      </div>
    </div>
  )
}

export default Screen
