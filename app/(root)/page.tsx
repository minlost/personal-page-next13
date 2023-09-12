"use client"

import PageStyler from "@/components/pageStyler/PageStyler"
import ProgramSwitcher from "@/components/ui/ProgramSwitcher"
import { useSwitchScreen } from "@/hooks/useSwitchScreen"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"
import LinksBox from "../../components/ui/LinksBox"

export default function HomePage() {
  const { isTvMode } = useSwitchScreen()

  const [isProfilePicShowing, setIsProfilePicShowing] = useState(false)

  const handleMouseEnterOrLeave = () => {
    setIsProfilePicShowing((prev) => !prev)
  }

  return (
    <PageStyler>
      <ProgramSwitcher />

      <div
        className={cn(
          `    mt-48  relative`,
          `${isTvMode ? "md:mt-52" : "mt-64 md:mt-96 "}`
        )}
      >
        <div className="leading-tight">
          Hello, I&apos;m{" "}
          <span
            onMouseEnter={handleMouseEnterOrLeave}
            onMouseLeave={handleMouseEnterOrLeave}
            className="text-white relative"
          >
            Václav Vlček
            {isProfilePicShowing && (
              <Image
                className="absolute top-0 left-0"
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
          <br /> Apart from diving deep into code,{" "}
          <span className="text-white">
            I am deeply fascinated by the wonders of astronomy.
          </span>
          <br />I relish taking on challenging projects and collaborating with
          teams to bring ideas to life. Eagerly looking forward to integrating
          my dedication, expertise, and passion for both tech and science with
          your team as we join hands to craft remarkable digital experiences.
        </div>
      </div>
      <LinksBox />
    </PageStyler>
  )
}
