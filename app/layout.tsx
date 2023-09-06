import Screen from "@/components/Screen"
import Controller from "@/components/controller/Controller"
import SpaceSwitcher from "@/components/ui/SpaceSwitcher"
import StarParallax from "@/paralax/StarParallax"
import type { Metadata } from "next"
import { VT323 } from "next/font/google"
import "./css/globals.css"
import "./css/stars.css"

const inter = VT323({ weight: "400", style: "normal", subsets: ["latin"] })
export const metadata: Metadata = {
  title: "Personal page - Vaclav Vlcek",
  description: "This is my personal page ehmm...CSS playgound",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="" lang="en">
      <body
        className={` ${inter.className} flex justify-center  w-full  bg-black  overflow-hidden `}
      >
        <StarParallax />
        <SpaceSwitcher />
        <Screen>{children}</Screen>
        <Controller />
      </body>
    </html>
  )
}
