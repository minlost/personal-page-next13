"use client"

import { useSwitchScreen } from "@/hooks/useSwitchScreen"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"

const Description = () => {
  const [isProfilePicShowing, setIsProfilePicShowing] = useState(false)
  const [isAstronomyPicShowing, setIsAstronomyPicShowing] = useState(false)

  const { isTvMode } = useSwitchScreen()

  return (
    <div
      className={cn(
        `    mt-48  relative`,
        `${isTvMode ? "md:mt-52" : "mt-64 md:mt-96 "}`
      )}
    >
      <div className="leading-tight">
        Hello, I&apos;m{" "}
        <span
          onMouseEnter={() => {
            setIsProfilePicShowing((prev) => !prev)
          }}
          onMouseLeave={() => {
            setIsProfilePicShowing((prev) => !prev)
          }}
          className="text-white relative"
        >
          Václav Vlček
          {isProfilePicShowing && (
            <Image
              className="absolute top-0 left-0 cursor-link"
              src="/img/profilePhoto.png"
              width={300}
              height={300}
              alt="profile"
            />
          )}
        </span>
        , an enthusiastic Web Developer passionate about programming,
        technology, and science. With a specialization in{" "}
        <span className="text-white">
          React, Next.js, TypeScript, and Python
        </span>
        , I continuously strive to enhance and broaden my skill set. <br />
        My driving forces include problem-solving, embracing new technologies,
        and crafting efficient and innovative solutions.
        <br /> Apart from diving deep into code, I am deeply fascinated by the
        wonders of{" "}
        <span
          onMouseEnter={() => {
            setIsAstronomyPicShowing((prev) => !prev)
          }}
          onMouseLeave={() => {
            setIsAstronomyPicShowing((prev) => !prev)
          }}
          className="text-white relative  cursor-link"
        >
          astronomy.
          {isAstronomyPicShowing && (
            <Image
              className="absolute top-0 left-0"
              src="/img/astronomy.png"
              width={300}
              height={300}
              alt="astronomy"
            />
          )}
        </span>
        <br />I relish taking on challenging projects and collaborating with
        teams to bring ideas to life. Eagerly looking forward to integrating my
        dedication, expertise, and passion for both tech and science with your
        team as we join hands to craft remarkable digital experiences.
      </div>
    </div>
  )
}

export default Description
