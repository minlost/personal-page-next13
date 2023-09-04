"use client"

import { useSwitchScreen } from "@/hooks/useSwitchScreen"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const ProgramSwitcher = () => {
  const path = usePathname()
  const [newDate, setNewDate] = useState(new Date())
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)

  const {
    channel,
    muteVideo,
    togglePlayVideo,
    setChannel,
    isTvMode,
    videoRef,
    isSwaping,
  } = useSwitchScreen()

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ]

  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    setAudio(new Audio("/sounds/glitch.mp3"))
  }, [])

  const handleChannel = (isLeft: boolean) => {
    if (audio) {
      audio.onended = () => {
        setIsAudioPlaying(false)
      }
      if (!isAudioPlaying) {
        audio.play()
        setIsAudioPlaying(true)
      }
    }
    const newChannel = isLeft
      ? channel === 9
        ? 1
        : channel + 1
      : channel === 1
      ? 9
      : channel - 1

    setChannel(newChannel)
  }

  useEffect(() => {
    const newDate = new Date()
    setNewDate(newDate)
  }, [])

  const muteVideoFnc = () => {
    if (videoRef !== null) {
      muteVideo(videoRef.current)
    }
  }

  const togglePlayVideoFunc = () => {
    if (videoRef !== null) {
      togglePlayVideo(videoRef.current)
    }
  }

  return (
    <nav
      className={cn(
        `w-full h-10 z-[150] flex justify-between    mt-20,`,
        `${isTvMode ? "mt-10" : "mt-20"} ${
          isSwaping ? "custom-text-shadow-animation" : ""
        }`
      )}
    >
      <div
        className={`text-[0.9em] ${
          isSwaping ? "custom-text-shadow-animation" : " text-red-800"
        } flex flex-col`}
      >
        {newDate.toDateString()}
        {navLinks.map((link, index) => (
          <Link
            className={`${cn(
              "text-[0.6em]",
              isSwaping
                ? "custom-text-shadow-animation"
                : path === link.href
                ? "text-black"
                : "text-red-500"
            )}`}
            key={index}
            href={link.href}
          >
            <span
              className={`relative z-20 hover:animate-blinkmulticolor text-[2em] md:text-[1em]  `}
            >
              {link.name}
            </span>
          </Link>
        ))}
      </div>
      <div className="flex-col justify-center items-center">
        <div className="flex gap-2 items-center justify-end text-[0.8em] md:text-[0.6em]">
          <div
            onClick={() => handleChannel(false)}
            className="hover:scale-105 ease-in-out duration-200 active:scale-95 rotate-180 text-[0.8em] cursor-pointer mb-[3px]"
          >
            ▶
          </div>
          <div>Channel {channel} </div>
          <div
            onClick={() => handleChannel(true)}
            className="hover:scale-105 ease-in-out duration-200  active:scale-95  text-[0.8em]  cursor-pointer mb-[3px] "
          >
            ▶
          </div>
        </div>
        <div className="flex gap-5 justify-center text-[0.5em]">
          <div
            className="hover:scale-105 ease-in-out duration-200 active:scale-100  cursor-pointer text-[1em]"
            onClick={muteVideoFnc}
          >
            Mute/Unmute
          </div>
          <div
            className="hover:scale-105 ease-in-out duration-200 active:scale-100 cursor-pointer text-[1em]"
            onClick={togglePlayVideoFunc}
          >
            Play/Stop
          </div>
        </div>
      </div>
    </nav>
  )
}

export default ProgramSwitcher
