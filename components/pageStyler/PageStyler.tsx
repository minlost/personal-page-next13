"use client"

import { useShowScrollbar } from "@/hooks/useShowScrollbar"
import { useSwitchScreen } from "@/hooks/useSwitchScreen"
import { FC, useState } from "react"

interface PageStylerProps {
  children: React.ReactNode
}

const PageStyler: FC<PageStylerProps> = ({ children }) => {
  const { isTvMode, isSwaping } = useSwitchScreen()
  const { shouldShowScrollbar } = useShowScrollbar(isTvMode)
  return (
    <div
      className={`
    ${
      shouldShowScrollbar && isTvMode ? "overflow-y-scroll " : "overflow-hidden"
    }
    ${
      isTvMode
        ? "aspect-video text-[1.7em] sm:text-[2em] md:text-[3em] -translate-y-[1px] z-50 "
        : "w-full h-screen  text-[2.6em] md:text-[4em] z-50 overflow-y-scroll    xl:px-40  2xl:px-52"
    }  relative  px-5 md:px-8  lg:px-12 z-[200] ${
        isSwaping ? "animate-textShaking" : ""
      } translate-y-[0.1px]  `}
    >
      {children}
    </div>
  )
}

export default PageStyler
