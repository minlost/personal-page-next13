"use client"

import { useSwitchScreen } from "@/hooks/useSwitchScreen"

const SpaceSwitcher = () => {
  const { isTvMode, toggleTVMode } = useSwitchScreen()
  return (
    <button
      className={` cursor-link absolute top-5 right-5 text-sm z-50 text-[1rem] md:text-[2.1rem] text-white `}
      onClick={toggleTVMode}
    >
      <span
        className={`relative z-20 hover:animate-blinkmulticolor text-[2em] md:text-[1em]  `}
      >
        {isTvMode ? "FULL SCREEN MODE" : "TV MODE"}
      </span>
    </button>
  )
}

export default SpaceSwitcher
