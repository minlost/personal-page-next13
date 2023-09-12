"use client"

import { useSwitchScreen } from "@/hooks/useSwitchScreen"
import { FC } from "react"

interface ChannelProps {
  children?: React.ReactNode
}

const Channel: FC<ChannelProps> = ({ children }) => {
  const { isTvMode } = useSwitchScreen()

  return (
    <>
      <div className="  w-full h-screen rowGradient ">
        <video
          preload="auto"
          className={`w-full h-full opacity-20 rowGradient ${
            isTvMode ? "scale-150" : "scale-[5] md:scale-[4] lg:scale-150 "
          }  `}
          playsInline
          autoPlay
          muted
          loop
        >
          <source src="/video/tvEffect-c.mp4" type="video/mp4" />
        </video>

        {children}
      </div>
    </>
  )
}

export default Channel
