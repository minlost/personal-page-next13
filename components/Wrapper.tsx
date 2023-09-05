"use client"

import { useSwitchScreen } from "@/hooks/useSwitchScreen"
import { FC } from "react"

interface WrapperProps {
  children: React.ReactNode
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
  const { isTvMode } = useSwitchScreen()

  return (
    <div className={`${isTvMode ? "overflow-hidden" : ""} w-full h-full  `}>
      {children}
    </div>
  )
}

export default Wrapper
