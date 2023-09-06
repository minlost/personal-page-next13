import useFirstLoadAniamtion from "@/hooks/useFirstLoadAniamtion"
import { useSwitchScreen } from "@/hooks/useSwitchScreen"
import { FC } from "react"

interface ScreenAnimatatorProps {
  children: React.ReactNode
}

const ScreenAnimatator: FC<ScreenAnimatatorProps> = ({ children }) => {
  const { isSwaping } = useSwitchScreen()
  const { isFirstLoad } = useFirstLoadAniamtion()

  return (
    <div
      className={` w-full h-full ${
        isSwaping ? "  text-shadow-anim text-white animate-textShaking" : ""
      } ${
        isFirstLoad
          ? "animate-textShakingFirstLoad  text-shadow-anim text-white  "
          : ""
      } `}
    >
      {children}
    </div>
  )
}

export default ScreenAnimatator
